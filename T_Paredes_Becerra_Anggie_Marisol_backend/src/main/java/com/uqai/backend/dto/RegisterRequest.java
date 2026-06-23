package com.uqai.backend.dto;

import com.uqai.backend.entity.Rol;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record RegisterRequest(
        @NotBlank String nombre,
        @NotBlank String apellidos,
        @Email String email,
        @NotBlank String password,
        @NotNull Rol rol,
        @NotBlank String area
) {
}
