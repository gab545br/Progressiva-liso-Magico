import { Sparkles } from "lucide-react";
import { Link } from "wouter";

export default function ExchangePolicy() {
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
        <h1 className="text-3xl font-display font-bold text-slate-900 mb-8">Política de Troca e Devolução</h1>
        <p className="text-sm text-slate-400 mb-8">Última atualização: Fevereiro de 2026</p>

        <div className="prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. Garantia de Satisfação</h2>
            <p>Na Liso Mágico Cosméticos, a sua satisfação é nossa prioridade. Por isso, oferecemos uma garantia de <strong>7 dias</strong> a partir da data de recebimento do produto. Se por qualquer motivo você não ficar satisfeita com o resultado, garantimos a devolução do seu dinheiro.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. Prazo para Solicitar Troca ou Devolução</h2>
            <p>Você tem até <strong>7 dias corridos</strong> após o recebimento do produto para solicitar a troca ou devolução. Após esse prazo, não será possível processar a solicitação.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. Condições para Troca ou Devolução</h2>
            <p>Para que sua solicitação seja aceita, é necessário atender às seguintes condições:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>O produto deve estar em sua embalagem original</li>
              <li>O produto não pode ter sido utilizado em mais de 50% do conteúdo</li>
              <li>É necessário apresentar o comprovante de recebimento ou número do pedido</li>
              <li>O produto não pode apresentar sinais de mau uso ou armazenamento inadequado</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. Como Solicitar a Troca ou Devolução</h2>
            <p>Para iniciar o processo de troca ou devolução, siga os passos abaixo:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Passo 1:</strong> Entre em contato com nossa equipe pelo e-mail contato@lisomagico.com.br ou pelo telefone (34) 99766-8955</li>
              <li><strong>Passo 2:</strong> Informe o número do pedido e o motivo da troca ou devolução</li>
              <li><strong>Passo 3:</strong> Aguarde a confirmação da nossa equipe com as instruções de envio</li>
              <li><strong>Passo 4:</strong> Envie o produto de volta conforme as orientações recebidas</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. Custos de Envio</h2>
            <p>Em caso de devolução por arrependimento, os custos de envio de retorno são de responsabilidade do cliente. Caso o produto tenha sido entregue com defeito ou diferente do anunciado, a Liso Mágico Cosméticos arcará com todos os custos de envio.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">6. Reembolso</h2>
            <p>Após recebermos o produto e verificarmos que ele atende às condições descritas, o reembolso será processado da seguinte forma:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Pagamento na entrega (dinheiro):</strong> O reembolso será feito via transferência bancária (Pix) em até 7 dias úteis</li>
              <li><strong>Cartão de crédito:</strong> O estorno será realizado na fatura do cartão em até 2 ciclos de faturamento</li>
              <li><strong>Pix:</strong> O reembolso será feito na mesma chave Pix em até 7 dias úteis</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">7. Produtos com Defeito</h2>
            <p>Se você recebeu um produto com defeito de fabricação, lacre violado ou diferente do que foi anunciado, entre em contato imediatamente com nossa equipe. Nesses casos:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>A troca será realizada sem custo adicional</li>
              <li>O frete de envio e retorno será por nossa conta</li>
              <li>Priorizamos o envio de um novo produto o mais rápido possível</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">8. Trocas</h2>
            <p>Caso deseje trocar o produto por outro kit ou quantidade diferente, entre em contato com nossa equipe. A troca está sujeita à disponibilidade em estoque e eventuais diferenças de valor serão comunicadas antes da confirmação.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">9. Direito de Arrependimento</h2>
            <p>Conforme o <strong>Código de Defesa do Consumidor (Art. 49)</strong>, você tem o direito de desistir da compra em até 7 dias corridos a partir do recebimento do produto, sem necessidade de justificativa. Neste caso, o valor pago será integralmente reembolsado, incluindo o frete.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">10. Dados da Empresa</h2>
            <p>Razão Social: 65.206.918 GABRIEL RODRIGUES DE BRITO</p>
            <p>CNPJ: 65.206.918/0001-37</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">11. Contato</h2>
            <p>Se você tiver dúvidas sobre nossa Política de Troca e Devolução, entre em contato conosco:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>E-mail: contato@lisomagico.com.br</li>
              <li>Telefone: (34) 99766-8955</li>
              <li>Horário de atendimento: Segunda a Segunda, das 7h às 23h</li>
            </ul>
          </section>
        </div>
      </main>

      <footer className="bg-slate-900 text-white/40 text-center py-6 text-sm">
        &copy; 2026 Liso Mágico Cosméticos. Todos os direitos reservados.
      </footer>
    </div>
  );
}
