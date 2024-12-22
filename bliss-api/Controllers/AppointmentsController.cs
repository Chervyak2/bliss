using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using Data;
using Models;

namespace bliss_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentsController : ControllerBase
    {
        private readonly SalonDbContext _context;

        public AppointmentsController(SalonDbContext context)
        {
            _context = context;
        }

        // GET: api/Appointments
        [Authorize(Roles = "Admin,Master")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Appointment>>> GetAppointments()
        {
            return await _context.Appointments.ToListAsync();
        }

        // GET: api/Appointments/5
        [Authorize]
        [HttpGet("{id}")]
        public async Task<ActionResult<Appointment>> GetAppointment(int id)
        {
            var appointment = await _context.Appointments.FindAsync(id);

            if (appointment == null)
            {
                return NotFound();
            }

            var userId = User.FindFirst("sub")?.Value; // Get logged-in user's ID
            var userRole = User.FindFirst("role")?.Value; // Get logged-in user's role

            // Allow only Admin, Masters linked to the appointment, or the Client who booked it
            if (userRole == "Admin" || 
                appointment.MasterId.ToString() == userId || 
                appointment.UserId.ToString() == userId)
            {
            return appointment;
        }

            return Forbid(); // Deny access
        }

        // PUT: api/Appointments/5
        [Authorize(Roles = "Admin,Master")]
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAppointment(int id, Appointment appointment)
        {
            if (id != appointment.Id)
            {
                return BadRequest();
            }

            var userId = User.FindFirst("sub")?.Value;
            var userRole = User.FindFirst("role")?.Value;

            // Allow only Admin or the Master assigned to update the appointment
            if (userRole != "Admin" && appointment.MasterId.ToString() != userId)
            {
                return Forbid();
            }

            _context.Entry(appointment).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AppointmentExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Appointments
        [Authorize(Roles = "Admin,Client")]
        [HttpPost]
        public async Task<ActionResult<Appointment>> PostAppointment(Appointment appointment)
        {
            var userId = User.FindFirst("sub")?.Value;

            // Ensure the logged-in user is setting the correct UserId
            if (User.IsInRole("Client") && appointment.UserId.ToString() != userId)
            {
                return BadRequest("You can only create appointments for yourself.");
            }

            _context.Appointments.Add(appointment);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAppointment", new { id = appointment.Id }, appointment);
        }

        // DELETE: api/Appointments/5
        [Authorize(Roles = "Admin,Client")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAppointment(int id)
        {
            var appointment = await _context.Appointments.FindAsync(id);

            if (appointment == null)
            {
                return NotFound();
            }

            var userId = User.FindFirst("sub")?.Value;
            var userRole = User.FindFirst("role")?.Value;

            // Allow only Admin or the Client who created the appointment to delete it
            if (userRole != "Admin" && appointment.UserId.ToString() != userId)
            {
                return Forbid();
            }

            _context.Appointments.Remove(appointment);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AppointmentExists(int id)
        {
            return _context.Appointments.Any(e => e.Id == id);
        }
    }
}
