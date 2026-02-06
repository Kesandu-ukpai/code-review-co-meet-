<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  

## Description
This project is a collaborative code review and real-time programming session platform built to demonstrate production-grade backend engineering using NestJS. The system enables developers to authenticate via GitHub, create shared sessions, collaborate in real time through WebSockets, review code from GitHub repositories, and receive AI-assisted feedback.

The backend is designed with a strong emphasis on system correctness, failure handling, and observability. Core concerns such as authentication, session lifecycle, real-time presence, concurrency control, and external API integration are modeled explicitly. Infrastructure dependencies like PostgreSQL and Redis are treated as first-class components, with clear health and readiness signaling to support safe deployment and scaling.

The goal of the project is not only to deliver features, but to showcase systems thinking, intentional trade-offs, and the ability to build backend services that behave predictably under failure and load.

# Week 1: Foundations
# Goal

As system complexity increases, create a production-grade foundation that won't need to be reworked. Infrastructure, observability, and architectural clarity are prioritized over feature development in Week 1.

--- 

# What Was Constructed

* A modular monolithic NestJS project scaffold with distinct module boundaries
* Centralized environment and configuration management
* Integration of PostgreSQL as the main layer of persistence
* Using direct `ioredis` as a first-class infrastructure dependency for Redis integration
* Logging infrastructure lifecycle events in an organized manner
* Endpoints for readiness and health

--- ## Important Design Choices

* `GET /ready` verifies Redis and PostgreSQL availability.
* Infrastructure failures do not crash the application; instead, the instance is removed from traffic via readiness checks.

# Outcome

By the end of Week 1, the system boots cleanly, exposes clear operational signals, handles dependency failures gracefully, and is ready for higher-level features without architectural rework.


## Week 2

# Goal:
A system that allows a user to authenticate using GitHub without managing passwords, while establishing a trusted internal identity.


## Stay in touch

- Author - [Kesandu Ukpai](https://x.com/CodeByKesandu)

