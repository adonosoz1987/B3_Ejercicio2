import http from 'k6/http';
import { check, sleep } from 'k6';

// Configuración de la prueba de carga
export const options = {
  stages: [
    { duration: '5s', target: 5 },  // Subida rápida a 5 usuarios virtuales
    { duration: '10s', target: 5 }, // Mantiene 5 usuarios por 10 segundos
    { duration: '5s', target: 0 },  // Rampa de bajada a 0
  ],
  thresholds: {
    // Umbral de éxito: el 95% de las peticiones deben ser menores a 500ms
    http_req_duration: ['p(95)<500'],
    // Tasa de errores menor al 1%
    http_req_failed: ['rate<0.01'],
  },
};

export default function () {
  // Petición de prueba
  const res = http.get('https://test.k6.io');

  // Validaciones
  check(res, {
    'status es 200': (r) => r.status === 200,
    'tiempo respuesta < 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1);
}