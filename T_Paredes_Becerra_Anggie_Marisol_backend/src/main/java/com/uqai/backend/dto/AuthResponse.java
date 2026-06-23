package com.uqai.backend.dto;

import com.uqai.backend.entity.Rol;

public record AuthResponse(
        String token,
        Long id,
        String nombre,
        String apellidos,
        String email,
        Rol rol,
        String area
) {
}
