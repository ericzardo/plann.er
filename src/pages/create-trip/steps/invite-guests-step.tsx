import { ArrowRight, UserRoundPlus } from "lucide-react";
import { Button } from "../../../components/button";

interface InviteGuestsStepProps {
  openGuestsModal: () => void
  openConfirmTripModalOpen: () => void
  emailsToInvite: string[]
}

export function InviteGuestsStep ({openGuestsModal, openConfirmTripModalOpen, emailsToInvite}: InviteGuestsStepProps) {

  return (
    <div className="flex items-center h-16 px-4 gap-3 bg-zinc-900 rounded-xl shadow-shape">
      <button type="button" onClick={openGuestsModal} className="flex items-center gap-2 flex-1">
        <UserRoundPlus className="size-5 text-zinc-400" />
        
        {emailsToInvite.length > 0 ? (
          <span className="text-lg text-zinc-100" >{emailsToInvite.length} pessoa(s) convidada(s)</span>
        ) : (
          <span className="text-lg text-zinc-400" >Quem estará na viagem?</span>
        )}
        
      </button>

      <Button onClick={openConfirmTripModalOpen} type="button">
        Confirmar viagem
        <ArrowRight className="size-5"/>
      </Button>
    </div>
  );
}