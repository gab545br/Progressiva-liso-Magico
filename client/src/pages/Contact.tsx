import { Sparkles, Mail, Phone, Clock, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function Contact() {
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
        <h1 className="text-3xl font-display font-bold text-slate-900 mb-4">Contato</h1>
        <p className="text-slate-500 mb-10 text-lg">Estamos aqui para ajudar! Entre em contato com a nossa equipe.</p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">E-mail</h3>
            <p className="text-slate-600">contato@lisomagico.com.br</p>
            <p className="text-slate-400 text-sm mt-2">Respondemos em até 24 horas</p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Telefone</h3>
            <p className="text-slate-600">(34) 99766-8955</p>
            <p className="text-slate-400 text-sm mt-2">Ligações e mensagens</p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Horário de Atendimento</h3>
            <p className="text-slate-600">Segunda a Segunda</p>
            <p className="text-slate-600">das 7h às 23h</p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Localização</h3>
            <p className="text-slate-600">Brasil</p>
            <p className="text-slate-400 text-sm mt-2">Entregamos para todo o país</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Informações da Empresa</h2>
          <div className="space-y-3 text-slate-600">
            <p><span className="font-semibold text-slate-700">Razão Social:</span> 65.206.918 GABRIEL RODRIGUES DE BRITO</p>
            <p><span className="font-semibold text-slate-700">CNPJ:</span> 65.206.918/0001-37</p>
            <p><span className="font-semibold text-slate-700">Responsável:</span> Gabriel Rodrigues de Brito</p>
          </div>
        </div>

        <div className="mt-10 bg-slate-50 rounded-2xl p-8 border border-slate-100">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Dúvidas Frequentes</h2>
          <div className="space-y-4 text-slate-600">
            <div>
              <p className="font-semibold text-slate-700 mb-1">Como faço para rastrear meu pedido?</p>
              <p className="text-sm">Entre em contato pelo e-mail ou telefone informando o número do seu pedido. Nossa equipe enviará o código de rastreio.</p>
            </div>
            <div>
              <p className="font-semibold text-slate-700 mb-1">Qual o prazo de resposta?</p>
              <p className="text-sm">Respondemos todas as mensagens em até 24 horas, de segunda a segunda.</p>
            </div>
            <div>
              <p className="font-semibold text-slate-700 mb-1">Como solicitar troca ou devolução?</p>
              <p className="text-sm">Envie um e-mail para contato@lisomagico.com.br com o número do pedido e o motivo. Consulte também nossa <a href="/troca-e-devolucao" className="text-[#C6A756] hover:underline">Política de Troca e Devolução</a>.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-slate-900 text-white/40 text-center py-6 text-sm">
        &copy; 2026 Liso Mágico Cosméticos. Todos os direitos reservados.
      </footer>
    </div>
  );
}
