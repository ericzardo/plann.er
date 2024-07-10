import { X, User, Mail } from "lucide-react";
import { Button } from "../../../components/button";
import { Input } from "../../../components/input";

interface AcceptInviteModalProps {
  closeAcceptInviteModal?: () => void
}

export function AcceptInviteModal ({ closeAcceptInviteModal }: AcceptInviteModalProps) {
  return (
    <div className="fixed inset-0 bg-black/65 flex items-center justify-center">
      <div className="bg-zinc-900 w-[640px] rounded-xl py-5 px-6 space-y-5 shadow-shape">

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Confirmar criação da viagem</h2>
            <button type="button" onClick={closeAcceptInviteModal}>
              <X className="size-5 text-zinc-400"/>
            </button>
          </div>

          <p className="text-sm text-zinc-400">Para concluir a criação da viagem para <span className="font-semibold text-zinc-100">Florianópolis, Brasil</span> nas datas de <span className="font-semibold text-zinc-100">16 a 27 de Agosto de 2024</span> preencha seus dados abaixo:</p>
        </div>

        <form className="space-y-3">
          <Input name="name" placeholder="Seu nome completo" icon={<User className="size-5 text-zinc-400" />} />

          <Input type="email" name="email" placeholder="Seu e-mail" icon={<Mail className="size-5 text-zinc-400" />} />

          <Button type="submit" size="full" >
            Confirmar minha presença
          </Button>

        </form>

      </div>
    </div>
  );
}