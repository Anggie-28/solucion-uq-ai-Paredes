package com.uqai.backend.config;

import com.uqai.backend.entity.Lead;
import com.uqai.backend.entity.Rol;
import com.uqai.backend.entity.Usuario;
import com.uqai.backend.repository.LeadRepository;
import com.uqai.backend.repository.UsuarioRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component

public class DataInitializer implements CommandLineRunner {
    private final UsuarioRepository usuarioRepository;
    private final LeadRepository leadRepository;
    private final PasswordEncoder passwordEncoder;

    public DataInitializer(
            UsuarioRepository usuarioRepository,
            LeadRepository leadRepository,
            PasswordEncoder passwordEncoder
    ) {
        this.usuarioRepository = usuarioRepository;
        this.leadRepository = leadRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) {
        if (usuarioRepository.count() == 0) {
            usuarioRepository.save(Usuario.builder()
                    .nombre("Admin")
                    .apellidos("UQ AI")
                    .email("admin@uqai.pe")
                    .password(passwordEncoder.encode("Admin12345"))
                    .rol(Rol.ADMIN)
                    .area("Seguridad")
                    .build());

            usuarioRepository.save(Usuario.builder()
                    .nombre("Usuario")
                    .apellidos("Demo")
                    .email("user@uqai.pe")
                    .password(passwordEncoder.encode("User12345"))
                    .rol(Rol.USER)
                    .area("Academy")
                    .build());
        }

        if (leadRepository.count() == 0) {
            leadRepository.save(Lead.builder()
                    .nombre("Mariana Torres")
                    .email("mariana@empresa.pe")
                    .empresa("Clinica Salud Viva")
                    .telefono("999888777")
                    .mensaje("Buscamos un chatbot seguro para orientar pacientes.")
                    .build());
        }
    }
}
