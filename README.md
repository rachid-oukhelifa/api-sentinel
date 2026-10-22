# API Sentinel

Plateforme de gestion et de surveillance des API d'une entreprise.

## Fonctionnalités

- Centralisation de la documentation (import OpenAPI / Swagger)
- Surveillance de la disponibilité et de la latence
- Comparaison des versions et détection des changements incompatibles (breaking changes)
- Historique des incidents
- Dashboard en direct

## Stack

- **Backend** : NestJS, PostgreSQL, Redis (BullMQ)
- **Frontend** : Angular
- **Observabilité** : Prometheus, Grafana
- **Infra** : Docker, Kubernetes
- **CI/CD** : GitLab CI

## Structure du projet

```
api-sentinel/
├── backend/        # API NestJS
├── frontend/       # Application Angular
├── demo-apis/      # APIs de démonstration (ShopFlow)
└── docker-compose.yml
```

## Démarrage rapide

```bash
docker compose up -d
```

> 🚧 Projet en cours de développement.

## Auteur

Rachid Oukhelifa
