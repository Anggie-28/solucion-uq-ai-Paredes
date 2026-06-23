package com.uqai.backend.dto;

import com.uqai.backend.entity.Rol;
import com.uqai.backend.entity.Usuario;

public record UsuarioResponse(
        Long id,
        String nombre,
        String apellidos,
        String email,
        Rol rol,
        String area
) {
    public static UsuarioResponse from(Usuario usuario) {
        return new UsuarioResponse(
                usuario.getId(),
                usuario.getNombre(),
                usuario.getApellidos(),
                usuario.getEmail(),
                usuario.getRol(),
                usuario.getArea()
        );
    }
}
