package com.uqai.backend.controller;

import com.uqai.backend.dto.AuthResponse;
import com.uqai.backend.dto.LoginRequest;
import com.uqai.backend.dto.RegisterRequest;
import com.uqai.backend.entity.Usuario;
import com.uqai.backend.service.JwtService;
import com.uqai.backend.service.UsuarioService;
import jakarta.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")

public class AuthController {
    private final UsuarioService usuarioService;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthController(
            UsuarioService usuarioService,
            JwtService jwtService,
            AuthenticationManager authenticationManager
    ) {
        this.usuarioService = usuarioService;
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
    }

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@Valid @RequestBody RegisterRequest request) {
        Usuario usuario = usuarioService.registrar(request);
        return ResponseEntity.ok(toAuthResponse(usuario));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@Valid @RequestBody LoginRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.email(), request.password())
        );
        Usuario usuario = usuarioService.buscarPorEmail(request.email());
        return ResponseEntity.ok(toAuthResponse(usuario));
    }

    private AuthResponse toAuthResponse(Usuario usuario) {
        return new AuthResponse(
                jwtService.generateToken(usuario),
                usuario.getId(),
                usuario.getNombre(),
                usuario.getApellidos(),
                usuario.getEmail(),
                usuario.getRol(),
                usuario.getArea()
        );
    }
}
