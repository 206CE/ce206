// 1. Define what a single item looks like

interface ListItem {
  title?: string;
  description?: string;
  list?: string | string[];
}

// 2. Define the Props that the List component expects
interface ListProps {
  items?: ListItem[];
}

export function List({
  //3. Provide valid JavaScript objects as default array items
  items = [
    { title: 'title', description: 'description', list: ['item1', 'item2'] },
  ],
}: ListProps) {
  return (
    <div className='flex-col m-3'>
      {items.map((item, index) => (
        <article key={index}>
          <h6 className='text-card-primary'>{item.title}</h6>
          <p className='text-body'>{item.description}</p>

          {item.list && item.list.length > 0 && (
            <ol className='list-decimal list-inside'>
              {item.list.map((line, idx) => (
                //4. Render the individual string not the whole array
                <li className='text-body'key={idx}>{line}</li>
              ))}
            </ol>
          )}
        </article>
      ))}
    </div>
  );
}
