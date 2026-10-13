import { useState } from "react";
import Peca from "./Peca.jsx";
import { linhas, medidas, passos, faq, depoimentos, WHATSAPP, WHATSAPP_EXIBIDO, INSTAGRAM, INSTAGRAM_USER } from "./data.js";

const modelosTodos = linhas.flatMap((l) => l.modelos.map((m) => `${l.nome} ${m.nome}`));

function Linha({ l, aberta, onToggle }) {
  return (
    <li className="linha">
      <button className="linha-topo" onClick={onToggle} aria-expanded={aberta} aria-controls={`p-${l.id}`}>
        <span className="linha-nome">{l.nome}</span>
        <span className="linha-info">{l.desc}</span>
        <span className="linha-peso">{l.gramatura}</span>
        <span className="linha-sinal" aria-hidden="true">{aberta ? "−" : "+"}</span>
      </button>
      {aberta && (
        <div className="linha-corpo" id={`p-${l.id}`}>
          <div className="modelos">
            {l.modelos.map((m, i) => (
              <figure key={m.nome}>
                <div className="foto"><Peca tipo={l.tipo} cor={l.cores[i % l.cores.length]} forma={m.forma} curta={m.curta} /></div>
                <figcaption>{m.nome}</figcaption>
              </figure>
            ))}
          </div>
          {l.specs.length > 0 && <ul className="specs">{l.specs.map((s) => <li key={s}>{s}</li>)}</ul>}
        </div>
      )}
    </li>
  );
}

function Contato() {
  const [f, setF] = useState({ nome: "", contato: "", modelo: "", qtd: "", msg: "" });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const enviar = (e) => {
    e.preventDefault();
    const texto = `Olá! Quero um orçamento.\nNome/Marca: ${f.nome}\nContato: ${f.contato}\nModelo: ${f.modelo}\nQuantidade: ${f.qtd}\n${f.msg}\n(Vou enviar a arte por aqui.)`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`, "_blank", "noopener");
  };
  return (
    <form className="form" onSubmit={enviar}>
      <label>Nome / Marca<input required value={f.nome} onChange={set("nome")} /></label>
      <label>WhatsApp ou e-mail<input required value={f.contato} onChange={set("contato")} /></label>
      <label>Modelo de interesse
        <select required value={f.modelo} onChange={set("modelo")}>
          <option value="">Selecione</option>
          {modelosTodos.map((m) => <option key={m}>{m}</option>)}
        </select>
      </label>
      <label>Quantidade estimada<input inputMode="numeric" required value={f.qtd} onChange={set("qtd")} /></label>
      <label className="cheio">Mensagem<textarea rows="4" value={f.msg} onChange={set("msg")} /></label>
      <button className="btn" type="submit">Pedir orçamento pelo WhatsApp</button>
    </form>
  );
}

export default function App() {
  const [aberta, setAberta] = useState("30-penteada");
  return (
    <>
      <header className="topo">
        <a href="#inicio" className="marca" aria-label="Annauê Têxtil do Brasil, início"><img src="/logo.jpg" alt="Annauê Têxtil do Brasil e NOS Camisetas" width="200" height="42" /></a>
        <nav aria-label="Principal">
          <a href="#produtos">Produtos</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#perguntas">Perguntas</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero">
          <h1>Camiseta é coisa séria.</h1>
          <p className="lead">Confecção white label especializada em camisetas personalizadas no atacado, desde 2013.</p>
          <p className="destaque">Transformamos sua marca em realidade — tecidos e acabamentos impecáveis, produção ágil e qualidade em cada peça.</p>
          <div className="acoes">
            <a className="btn" href="#contato">Solicitar orçamento</a>
            <a className="btn-link" href="#como-funciona">Pedir uma amostra</a>
            <a className="btn-link" href="#produtos">Ver catálogo</a>
          </div>
        </section>

        <section className="faixa" aria-label="Diferenciais">
          <ul>
            <li>Mais de 10 anos de experiência</li>
            <li>Várias modelagens e linhas de tecido</li>
            <li>Serigrafia, bordado eletrônico e DTF</li>
            <li>Etiqueta personalizada na nuca</li>
            <li>Amostra com valor revertido em crédito</li>
          </ul>
        </section>

        <section id="quem-somos" className="bloco duas">
          <h2>Quem somos</h2>
          <div className="texto">
            <p>Desde 2013, atuamos como uma confecção white label especializada em camisetas personalizadas no atacado, entregando excelência em cada peça.</p>
            <p>Nosso objetivo é transformar sua marca em realidade: oferecemos tecidos e acabamentos impecáveis com produção ágil para que você receba produtos com qualidade.</p>
            <p><strong>Variedade de modelagens.</strong> Camisetas para diversos estilos, confeccionadas com os melhores materiais.</p>
            <p><strong>Personalização.</strong> Trabalhamos com serigrafia, bordado eletrônico e DTF de alta definição.</p>
            <p><strong>Etiquetas.</strong> Eleve a experiência do seu cliente com etiquetas impressas na gola/nuca: conforto e identidade de marca em cada peça.</p>
          </div>
        </section>

        <section id="produtos" className="bloco">
          <h2>Produtos</h2>
          <p className="nota">Pedido mínimo de 30 unidades por cor e modelo.</p>
          <ul className="lista">
            {linhas.map((l) => (
              <Linha key={l.id} l={l} aberta={aberta === l.id} onToggle={() => setAberta(aberta === l.id ? null : l.id)} />
            ))}
          </ul>
          <h3>Medidas das camisetas (cm)</h3>
          <div className="tabela-wrap">
            <table>
              <thead><tr><th>Tamanho</th><th>Altura</th><th>Largura</th><th>Manga</th></tr></thead>
              <tbody>{medidas.map((r) => <tr key={r[0]}>{r.map((c, i) => (i ? <td key={i}>{c}</td> : <th key={i} scope="row">{c}</th>))}</tr>)}</tbody>
            </table>
          </div>
        </section>

        <section id="como-funciona" className="bloco duas">
          <h2>Como funciona</h2>
          <div className="texto">
            <p><strong>Solicite uma amostra antes do seu pedido completo.</strong> Disponibilizamos amostras serigrafadas cuidadosamente desenvolvidas por nossa equipe, que refletem a qualidade das estampas e dos materiais que utilizamos. São peças prontas para vestir, ideais para você avaliar com precisão o padrão dos nossos produtos.</p>
            <p><strong>Realize seu pedido com segurança.</strong> Ao receber uma amostra, você comprova a excelência dos nossos serviços de serigrafia e a qualidade das peças personalizadas, com total clareza sobre o nível de entrega antes de fechar um pedido completo.</p>
            <p><strong>Valor de amostra como crédito.</strong> O investimento na amostra pode ser resgatado como crédito no seu primeiro pedido.</p>
            <h3>Passo a passo para orçamento</h3>
            <ol className="passos">
              {passos.map(([t, d]) => <li key={t}><strong>{t}</strong><span>{d}</span></li>)}
            </ol>
          </div>
        </section>

        <section id="perguntas" className="bloco duas">
          <h2>Perguntas frequentes</h2>
          <div className="texto">
            {faq.map(([q, a]) => (
              <details key={q}><summary>{q}</summary><p>{a}</p></details>
            ))}
          </div>
        </section>

        <section id="depoimentos" className="bloco">
          <h2>Depoimentos</h2>
          <div className="depos" tabIndex={0} role="region" aria-label="Depoimentos de clientes">
            {depoimentos.map((d) => (
              <figure key={d.nome} className="depo">
                <img src={d.foto} alt={d.alt} width="300" height="375" loading="lazy" />
                <blockquote>{d.texto}</blockquote>
                <figcaption><strong>{d.nome}</strong><span>{d.cargo}</span></figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="contato" className="bloco duas">
          <h2>Contato e orçamento</h2>
          <div className="texto">
            <p className="canais">
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener">WhatsApp {WHATSAPP_EXIBIDO}</a>
              <a href={INSTAGRAM} target="_blank" rel="noopener">Instagram {INSTAGRAM_USER}</a>
            </p>
            <Contato />
          </div>
        </section>
      </main>

      <footer className="rodape">
        <span>Annauê Têxtil do Brasil · white label desde 2013</span>
        <span className="rodape-links">
          <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener">WhatsApp</a>
          <a href={INSTAGRAM} target="_blank" rel="noopener">Instagram</a>
        </span>
      </footer>
    </>
  );
}
