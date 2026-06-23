package com.uqai.backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;





@Entity
@Table(name = "usuarios")




public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @NotBlank
    private String nombre;

    @Column(nullable = false)
    @NotBlank
    private String apellidos;

    @Column(nullable = false, unique = true)
    @Email
    private String email;

    @Column(nullable = false)
    private String password; // Siempre hash bcrypt, nunca texto plano.

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Rol rol;

    @Column(nullable = false)
    @NotBlank
    private String area;

    public Long getId() {
        return id;
    }

    public String getNombre() {
        return nombre;
    }

    public String getApellidos() {
        return apellidos;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public Rol getRol() {
        return rol;
    }

    public String getArea() {
        return area;
    }

    public static UsuarioBuilder builder() {
        return new UsuarioBuilder();
    }

    public static class UsuarioBuilder {
        private final Usuario usuario = new Usuario();

        public UsuarioBuilder nombre(String nombre) {
            usuario.nombre = nombre;
            return this;
        }

        public UsuarioBuilder apellidos(String apellidos) {
            usuario.apellidos = apellidos;
            return this;
        }

        public UsuarioBuilder email(String email) {
            usuario.email = email;
            return this;
        }

        public UsuarioBuilder password(String password) {
            usuario.password = password;
            return this;
        }

        public UsuarioBuilder rol(Rol rol) {
            usuario.rol = rol;
            return this;
        }

        public UsuarioBuilder area(String area) {
            usuario.area = area;
            return this;
        }

        public Usuario build() {
            return usuario;
        }
    }
}
