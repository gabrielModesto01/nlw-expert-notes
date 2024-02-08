import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { toast } from 'sonner'

interface NewNoteCardProps {
  onNoteCreated: (content: string) => void
}

export default function NewNoteCard({onNoteCreated}: NewNoteCardProps){
  const [shouldShowOnboarding, setShouldShowOnboarding] = useState(true)
  const [ isRecording, setIsRecording ] = useState(false)
  const [content, setContent] = useState('')
  
  function hanbleStartEditor() {
    setShouldShowOnboarding(false)
  }

  function handleContenteChanged(event: ChangeEvent<HTMLTextAreaElement>) {
    setContent(event.target.value)
    
    if(event.target.value === '') {
      setShouldShowOnboarding(true)
    }
  }

  function handleSaveNote(event: FormEvent) {
    event.preventDefault()

    onNoteCreated(content)

    setContent('')
    setShouldShowOnboarding(true)

    toast.success('Nota criada com sucesso!')
  }

  function handleStartRecording () {
    setIsRecording(true)
  }

    return(
      <Dialog.Root>
        <Dialog.Trigger className='rounded-md bg-slate-700 p-5 flex flex-col gap-3 outline-none text-left hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400'>
            <span className='text-sm font-medium text-slate-200'>
              Adicioanr nota
            </span>
            <p className='text-sm leading-6 text-slate-400'>
              Grave uma nota em áudio que será convertida para texto automaticamente.
            </p>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className='inset-0 fixed bg-black/50'/>
          <Dialog.Content className='overflow-hidden fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-slate-700 rounded-md flex flex-col outline-none'>
            <Dialog.Close className='absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100'>
              <X className='size-5'/>
            </Dialog.Close>

            <form 
              onSubmit={handleSaveNote}
              className='flex-1 flex flex-col'
            >
              <div className='flex flex-1 flex-col gap-3 p-3'>
                <span className='text-sm font-medium text-slate-300'>
                Adicioanr nota
                </span>
                {shouldShowOnboarding ? (
                  <p className='text-sm leading-6 text-slate-400'>
                  Comece <button type='button' onClick={handleStartRecording} className='text-lime-400 font-medium hover:underline'>gravando uma nota</button> em áudio ou se preferir <button type='button' onClick={hanbleStartEditor} className='text-lime-400 font-medium hover:underline'>utilize apenas texto</button>.
                </p>
                ): (
                  <textarea 
                    autoFocus
                    className='text-SM leading-6 text-slate-400 bg-transparent resize-none flex-1 outline-none'
                    onChange={handleContenteChanged}
                    value={content}
                  />
                )}
              </div>
              
              {isRecording ? (
                <button 
                type='submit'
                className='w-full bg-slate-900  py-4 text-center text-sm text-slate-300 outline-none font-medium hover:text-slate-100 focus-visible:ring-2 focus-visible:ring-slate-100'
              >
                Gravando! (clique aqui para interromper)
              </button>
              ) : (
                <button 
                type='submit'
                className='w-full bg-lime-400  py-4 text-center text-sm text-lime-950 outline-none font-medium hover:bg-lime-500 focus-visible:ring-2 focus-visible:ring-slate-100'
              >
                Salvar nota
              </button>
              )}

            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    )
}