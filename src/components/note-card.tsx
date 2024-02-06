interface NoteCardProps {
  nameNote: string;
}
export default function NoteCard(props: NoteCardProps){
    return( 
    <button className='rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden text-left outline-none relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-300'>
      <span className='text-sm font-medium text-slate-300'>
        {props.nameNote}
      </span>
      <p className='text-sm leading-6 text-slate-400'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo quis totam explicabo eius? Quis, ipsam voluptates. Voluptatum eum voluptate quaerat laborum harum. Aspernatur doloremque, cumque dolorem asperiores accusantium officiis tenetur?
      </p>

      <div className='absolute botton-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />
    </button>
    )
}