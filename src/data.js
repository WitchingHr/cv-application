const initial = [
  { name: 'general', id: 0, children:
    [
      {
        id: 0,
        name: 'This Person',
        job: 'Web Developer',
        summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eos officiis dolores est? Beatae corrupti maiores magni vero quia, odit labore.',
        email: 'matt1494@gmail.com',
        phone: 6039133102
      }
    ]
  },
  { name: 'education', id: 1, children:
    [
      { 
        id: 0,
        degree: 'Nothing',
        school: 'The Odin Project',
        from: 2022,
        to: 2023
      }
    ]
  },
  { name: 'experience', id: 2, children:
    [
      {
        id: 0,
        job: 'Junior Software Engineer',
        company: 'That Company',
        responsibilities: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eos officiis dolores est? Beatae corrupti maiores magni vero quia, odit labore consectetur aspernatur expedita possimus hic sapiente a magnam nemo.',
        from: 2022,
        to: 2023
      }
    ]
  },
  { name: 'skills', id: 3, children:
    [
      {
        id: 0,
        skill: 'React'
      }
    ]
  }
];

export default initial;