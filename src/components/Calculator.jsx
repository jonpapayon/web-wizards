import { useState } from "react";

const mxn = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
  maximumFractionDigits: 0,
});

export default function Calculator({ whatsapp, brand }) {
  const [citas, setCitas] = useState(120);
  const [faltan, setFaltan] = useState(15);
  const [ticket, setTicket] = useState(800);

  const perdidoMes = Math.round(citas * (faltan / 100) * ticket);
  const perdidoAnio = perdidoMes * 12;

  const mensaje = `Hola, usé la calculadora de ${brand}: pierdo cerca de ${mxn.format(
    perdidoMes
  )} al mes por citas que no llegan. Quiero saber cómo recuperarlo.`;
  const link = `https://wa.me/${whatsapp}?text=${encodeURIComponent(mensaje)}`;

  return (
    <div className="calc">
      <div className="card">
        <div className="field">
          <label htmlFor="citas">Citas al mes</label>
          <input
            id="citas"
            type="number"
            min="0"
            value={citas}
            onChange={(e) => setCitas(Number(e.target.value) || 0)}
          />
        </div>
        <div className="field">
          <label htmlFor="faltan">¿Qué % de citas no llega?</label>
          <input
            id="faltan"
            type="number"
            min="0"
            max="100"
            value={faltan}
            onChange={(e) =>
              setFaltan(Math.min(100, Number(e.target.value) || 0))
            }
          />
        </div>
        <div className="field">
          <label htmlFor="ticket">Cobro promedio por cita (MXN)</label>
          <input
            id="ticket"
            type="number"
            min="0"
            value={ticket}
            onChange={(e) => setTicket(Number(e.target.value) || 0)}
          />
        </div>
      </div>

      <div className="card result">
        <p>Estás dejando de ganar aproximadamente</p>
        <div className="amount gradient">{mxn.format(perdidoMes)}</div>
        <p>al mes ({mxn.format(perdidoAnio)} al año)</p>
        <a className="btn btn-primary" href={link} target="_blank" rel="noopener">
          Quiero recuperarlo por WhatsApp
        </a>
      </div>
    </div>
  );
}