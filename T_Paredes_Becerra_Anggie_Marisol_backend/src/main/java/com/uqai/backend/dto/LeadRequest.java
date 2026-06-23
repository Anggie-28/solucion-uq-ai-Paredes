package com.uqai.backend.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record LeadRequest(
        @NotBlank String nombre,
        @Email String email,
        @NotBlank String empresa,
        @NotBlank String telefono,
        @NotBlank String mensaje
) {
}
