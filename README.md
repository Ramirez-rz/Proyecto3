# Mini juego de batalla Pokémon

Desarrollar una aplicación en React que consuma la API de PokéAPI y simule un mini juego tipo batalla.

## Requisitos funcionales

- Mostrar una interfaz tipo Nintendo Switch (simulada en UI)
- Listar Pokémon obtenidos desde la API
- Permitir seleccionar un Pokémon
- Al seleccionar:
  - Cambiar de pantalla (uso de router o manejo de estado)
  - Iniciar una batalla por turnos

## Mecánica del juego

- Sistema de turnos (jugador vs oponente)
- Cada Pokémon debe tener:
  - Vida (HP)
  - Acciones básicas:
    - Ataque (reduce vida del oponente)
- Mostrar actualización de vida en cada turno

## Final del juego

- Detectar cuando la vida de un Pokémon llega a 0
- Mostrar pantalla de ganador

## Entregables

- Repositorio en GitHub
- Aplicación publicada en Vercel
- Integración real con la API
