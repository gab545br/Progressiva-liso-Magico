import { Sparkles } from "lucide-react";
import { Link } from "wouter";

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <header className="bg-slate-900 text-white py-6">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer" data-testid="link-home-logo">
              <Sparkles className="w-6 h-6 text-[#d4a017]" />
              <span className="font-display font-bold text-xl">Liso<span className="text-[#d4a017]">Mágico</span></span>
            </div>
          </Link>
          <Link href="/">
            <span className="text-sm text-white/70 hover:text-[#d4a017] cursor-pointer" data-testid="link-back-home">Voltar ao início</span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-3xl font-display font-bold text-slate-900 mb-8">Termos de Uso</h1>
        <p className="text-sm text-slate-400 mb-8">Última atualização: Fevereiro de 2026</p>

        <div className="prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. Aceitação dos Termos</h2>
            <p>Ao acessar e utilizar este site, você concorda com estes Termos de Uso. Se não concordar com algum destes termos, solicitamos que não utilize nosso site. O uso continuado do site constitui aceitação de quaisquer alterações feitas nestes termos.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. Descrição do Produto</h2>
            <p>O Liso Mágico é um produto cosmético para tratamento capilar. Os resultados podem variar de acordo com o tipo de cabelo, modo de aplicação e características individuais de cada pessoa. As imagens e depoimentos apresentados no site são ilustrativos e representam experiências individuais.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. Compra e Pagamento</h2>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Os preços apresentados são em Reais (R$) e podem ser alterados sem aviso prévio</li>
              <li>Oferecemos três opções de compra: 1 unidade (R$ 149,00), 2 unidades (R$ 297,00) e 3 unidades (R$ 397,00)</li>
              <li>O pagamento pode ser realizado na entrega do produto, via Pix ou cartão de crédito em até 12x</li>
              <li>O processamento do pagamento é realizado por plataforma parceira especializada e segura</li>
              <li>A confirmação do pedido será enviada por e-mail</li>
              <li>Nos reservamos o direito de cancelar pedidos em caso de suspeita de fraude</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. Entrega</h2>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>O prazo de entrega varia de 3 a 10 dias úteis, dependendo da região</li>
              <li>O frete é grátis para todos os planos disponíveis no site</li>
              <li>É responsabilidade do cliente fornecer o endereço correto e completo</li>
              <li>Tentativas de entrega serão realizadas conforme política da transportadora</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. Garantia e Devoluções</h2>
            <p>Oferecemos garantia de <strong>7 dias</strong> a partir do recebimento do produto. Dentro deste prazo, você pode solicitar a devolução nas seguintes condições:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Produto com defeito de fabricação</li>
              <li>Produto diferente do adquirido</li>
              <li>Insatisfação com o produto (o produto deve estar com pelo menos 70% do conteúdo)</li>
            </ul>
            <p className="mt-3">Para solicitar a devolução, entre em contato pelo e-mail contato@lisomagico.com.br ou pelo telefone (34) 99766-8955.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">6. Uso do Produto</h2>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Recomendamos realizar teste de mecha antes da aplicação</li>
              <li>Siga as instruções do rótulo do produto</li>
              <li>Em caso de irritação, suspenda o uso e procure orientação médica</li>
              <li>Manter fora do alcance de crianças</li>
              <li>Produto de uso externo</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">7. Propriedade Intelectual</h2>
            <p>Todo o conteúdo do site, incluindo textos, imagens, logotipos, marcas e design, é protegido por direitos autorais e propriedade intelectual. É proibida a reprodução, distribuição ou uso comercial sem autorização prévia por escrito.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">8. Limitação de Responsabilidade</h2>
            <p>O Liso Mágico não se responsabiliza por:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Uso inadequado do produto em desacordo com as instruções</li>
              <li>Reações alérgicas em caso de não realização do teste de mecha</li>
              <li>Resultados que variem das expectativas individuais</li>
              <li>Problemas técnicos no site fora do nosso controle</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">9. Dados do Fabricante</h2>
            <p>Fabricante: ERL Ind. Terceirista de Cosméticos</p>
            <p>Registro ANVISA nº 4.02912-7</p>
            <p>Responsável Técnica: Luciana Camargo — CRQ: 024023543</p>
            <p>Localização: Vila Cachoeirinha, Cambuí/MG</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">10. Alterações nos Termos</h2>
            <p>Reservamo-nos o direito de alterar estes Termos de Uso a qualquer momento. As alterações entram em vigor imediatamente após a publicação no site. Recomendamos que você revise esta página periodicamente.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">11. Contato</h2>
            <p>Para dúvidas sobre estes Termos de Uso, entre em contato:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>E-mail: contato@lisomagico.com.br</li>
              <li>Telefone: (34) 99766-8955</li>
              <li>Horário de atendimento: Segunda a Segunda, das 7h às 23h</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">12. Foro</h2>
            <p>Fica eleito o foro da comarca do domicílio do consumidor para dirimir quaisquer questões decorrentes destes Termos de Uso, conforme o Código de Defesa do Consumidor.</p>
          </section>
        </div>
      </main>

      <footer className="bg-slate-900 text-white/40 text-center py-6 text-sm">
        &copy; 2026 Liso Mágico Cosméticos. Todos os direitos reservados.
      </footer>
    </div>
  );
}
