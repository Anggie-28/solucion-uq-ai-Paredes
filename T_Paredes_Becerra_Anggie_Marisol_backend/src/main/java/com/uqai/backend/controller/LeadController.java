package com.uqai.backend.controller;

import com.uqai.backend.dto.LeadRequest;
import com.uqai.backend.entity.Lead;
import com.uqai.backend.repository.LeadRepository;
import jakarta.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/leads")

public class LeadController {
    private final LeadRepository leadRepository;

    public LeadController(LeadRepository leadRepository) {
        this.leadRepository = leadRepository;
    }

    @PostMapping
    public ResponseEntity<Lead> crearLead(@Valid @RequestBody LeadRequest request) {
        Lead lead = Lead.builder()
                .nombre(request.nombre())
                .email(request.email())
                .empresa(request.empresa())
                .telefono(request.telefono())
                .mensaje(request.mensaje())
                .build();

        return ResponseEntity.ok(leadRepository.save(lead));
    }

    @GetMapping
    public List<Lead> listarLeads() {
        return leadRepository.findAll();
    }
}
