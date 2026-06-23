package com.uqai.backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;




import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "leads")




public class Lead {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @NotBlank
    private String nombre;

    @Column(nullable = false)
    @Email
    private String email;

    @Column(nullable = false)
    @NotBlank
    private String empresa;

    @Column(nullable = false)
    @NotBlank
    private String telefono;

    @Column(nullable = false, length = 1000)
    @NotBlank
    private String mensaje;

    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    private LocalDateTime fechaRegistro;

    public Long getId() {
        return id;
    }

    public String getNombre() {
        return nombre;
    }

    public String getEmail() {
        return email;
    }

    public String getEmpresa() {
        return empresa;
    }

    public String getTelefono() {
        return telefono;
    }

    public String getMensaje() {
        return mensaje;
    }

    public LocalDateTime getFechaRegistro() {
        return fechaRegistro;
    }

    public static LeadBuilder builder() {
        return new LeadBuilder();
    }

    public static class LeadBuilder {
        private final Lead lead = new Lead();

        public LeadBuilder nombre(String nombre) {
            lead.nombre = nombre;
            return this;
        }

        public LeadBuilder email(String email) {
            lead.email = email;
            return this;
        }

        public LeadBuilder empresa(String empresa) {
            lead.empresa = empresa;
            return this;
        }

        public LeadBuilder telefono(String telefono) {
            lead.telefono = telefono;
            return this;
        }

        public LeadBuilder mensaje(String mensaje) {
            lead.mensaje = mensaje;
            return this;
        }

        public Lead build() {
            return lead;
        }
    }
}
