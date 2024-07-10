import { FormEvent, useState } from "react";
import { MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2, X, Plus, AtSign } from "lucide-react";

export function App() {
  const [isGuestsInputOpen, setisGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setisGuestsModalOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([]); 

  const openGuestsInput = () => setisGuestsInputOpen(true);
  const closeGuestsInput = () => setisGuestsInputOpen(false);
  
  const openGuestsModal = () => setisGuestsModalOpen(true);
  const closeGuestsModal = () => setisGuestsModalOpen(false);

  const addNewEmailToInvite = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const data = new FormData(event.currentTarget);
    const email = data.get("email")?.toString();

    if (!email || emailsToInvite.includes(email)) return;

    setEmailsToInvite([
      ...emailsToInvite,
      email
    ]);

    event.currentTarget.reset();
  }

  const removeEmailToInvite = (emailToRemove: string) => {
    const newEmailList = emailsToInvite.filter(email => email !== emailToRemove);

    setEmailsToInvite(newEmailList);
  }


  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-4 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>

        <div className="flex flex-col gap-4">

          <div className="flex items-center h-16 px-4 gap-3 bg-zinc-900 rounded-xl shadow-shape">
            <span className="flex items-center gap-2 flex-1">
              <MapPin className="size-5 text-zinc-400" />
              <input disabled={isGuestsInputOpen} type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none w-full" />
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400" />
              <input disabled={isGuestsInputOpen} type="text" placeholder="Quando?" className="bg-transparent w-48 text-lg placeholder-zinc-400 outline-none" />
            </span>

            <span className="w-px h-6 bg-zinc-800" />

            {isGuestsInputOpen ? (
              <button type="button" onClick={closeGuestsInput} className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 flex items-center gap-2 hover:bg-zinc-700">
                Alterar local/data
                <Settings2 className="size-5"/>
              </button>
            ) : (
              <button type="button" onClick={openGuestsInput} className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 flex items-center gap-2 hover:bg-lime-400">
                Continuar
                <ArrowRight className="size-5"/>
              </button>
            )}

            
          </div>

          {isGuestsInputOpen && (
            <div className="flex items-center h-16 px-4 gap-3 bg-zinc-900 rounded-xl shadow-shape">
              <button type="button" onClick={openGuestsModal} className="flex items-center gap-2 flex-1">
                <UserRoundPlus className="size-5 text-zinc-400" />
                <span className="text-lg text-zinc-400" >Quem estará na viagem?</span>
              </button>

              <button type="button" className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 flex items-center gap-2 hover:bg-lime-400">
                Confirmar viagem
                <ArrowRight className="size-5"/>
              </button>
            </div>
          )}

        </div>

        <p className="text-zinc-500 text-sm">Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
        com nossos <a href="#" className="text-zinc-300 underline">termos de uso</a> e <a href="#" className="text-zinc-300 underline">políticas de privacidade</a>.</p> 
      </div>

      {isGuestsModalOpen && (
        <div className="fixed inset-0 bg-black/65 flex items-center justify-center">
          <div className="bg-zinc-900 w-[640px] rounded-xl py-5 px-6 space-y-5 shadow-shape">

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Selecionar convidados</h2>
                <button type="button" onClick={closeGuestsModal}>
                  <X className="size-5 text-zinc-400"/>
                </button>
              </div>

              <p className="text-sm text-zinc-400">Os convidados irão receber e-mails para confirmar a participação na viagem.</p>
            </div>

            <div className="flex flex-wrap gap-2">

              {emailsToInvite.map(email => (
                <span key={email} className="flex items-center gap-2.5 px-2.5 py-1.5 bg-zinc-800 rounded-md">
                  <p className="text-zinc-300">{email}</p>
                  <button type="button" onClick={() => removeEmailToInvite(email)}>
                    <X className="size-4 text-zinc-400"/>
                  </button>
              </span>
              ))}

              

            </div>

            <div className="w-full h-px bg-zinc-800" />

            <form onSubmit={addNewEmailToInvite} className="flex items-center h-14 px-4 py-2.5 gap-3 bg-zinc-950 rounded-xl">
              <span className="flex items-center gap-2 flex-1">
                <AtSign className="size-5 text-zinc-400" />
                <input type="email" name="email" placeholder="Digite o e-mail do convidado" className="bg-transparent text-md placeholder-zinc-400 outline-none w-full" />
              </span>

              <button type="submit" className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 flex items-center gap-2 hover:bg-lime-400">
                Convidar
                <Plus className="size-5"/>
              </button>
            </form>

          </div>
        </div>
      )}
    </div>
  )
}
