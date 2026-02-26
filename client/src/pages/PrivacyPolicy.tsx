import { Sparkles } from "lucide-react";
import { Link } from "wouter";

export default function PrivacyPolicy() {
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
        <h1 className="text-3xl font-display font-bold text-slate-900 mb-8">Política de Privacidade</h1>
        <p className="text-sm text-slate-400 mb-8">Última atualização: Fevereiro de 2026</p>

        <div className="prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. Informações que Coletamos</h2>
            <p>Coletamos as seguintes informações quando você realiza uma compra ou interage com nosso site:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Nome completo</li>
              <li>Endereço de e-mail</li>
              <li>Número de telefone</li>
              <li>Endereço de entrega</li>
              <li>CPF (para fins de emissão de nota fiscal)</li>
              <li>Dados de navegação (cookies e tecnologias semelhantes)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. Como Utilizamos Suas Informações</h2>
            <p>Utilizamos suas informações pessoais para:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Processar e entregar seus pedidos</li>
              <li>Enviar atualizações sobre o status do seu pedido</li>
              <li>Prestar atendimento ao cliente</li>
              <li>Enviar comunicações de marketing (com seu consentimento)</li>
              <li>Melhorar nosso site e experiência de compra</li>
              <li>Cumprir obrigações legais e regulatórias</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. Compartilhamento de Dados</h2>
            <p>Não vendemos suas informações pessoais. Podemos compartilhar seus dados com:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Transportadoras para realizar a entrega do produto</li>
              <li>Plataforma parceira de checkout para processar pagamentos de forma segura</li>
              <li>Ferramentas de análise para melhorar nosso site</li>
              <li>Autoridades legais quando exigido por lei</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. Cookies</h2>
            <p>Nosso site utiliza cookies para melhorar sua experiência de navegação. Os cookies nos ajudam a entender como os visitantes utilizam nosso site e nos permitem personalizar o conteúdo. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar algumas funcionalidades do site.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. Segurança dos Dados</h2>
            <p>Adotamos medidas de segurança técnicas e organizacionais adequadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. O processamento de pagamentos é realizado por plataforma especializada com certificação de segurança.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">6. Seus Direitos (LGPD)</h2>
            <p>De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incompletos ou desatualizados</li>
              <li>Solicitar a exclusão dos seus dados</li>
              <li>Revogar o consentimento para o uso dos seus dados</li>
              <li>Solicitar a portabilidade dos seus dados</li>
            </ul>
            <p className="mt-3">Para exercer seus direitos, entre em contato pelo e-mail contato@lisomagico.com.br ou pelo telefone (34) 99766-8955.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">7. Dados da Empresa</h2>
            <p>Razão Social: 65.206.918 GABRIEL RODRIGUES DE BRITO</p>
            <p>CNPJ: 65.206.918/0001-37</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">8. Alterações nesta Política</h2>
            <p>Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos que você revise esta página regularmente. As alterações entram em vigor imediatamente após a publicação no site.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">9. Contato</h2>
            <p>Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco:</p>
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
