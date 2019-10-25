movies = {
  data: [
    {
      title: 'Terminator: Dark Fate',
      description:
        'More than two decades have passed since Sarah Connor prevented Judgment Day, changed the future, and re-wrote the fate of the human race. Dani Ramos is living a simple life in Mexico City with her brother and father…',
    },
    {
      title: 'Doctor Sleep',
      description:
        'A traumatized, alcoholic Dan Torrance meets Abra, a kid who also has the ability to "shine." He tries to protect her from the True Knot, a cult who\'s goal is to feed off people like them in order to remain immortal.',
    },
    {
      title: "Charlie's Angels",
      description:
        "When a systems engineer blows the whistle on a dangerous technology, Charlie's Angels from across the globe are called into action, putting their lives on the line to protect society.",
    },
  ],
  add: function addingMovie(movie) {
    return this.data.push(movie);
  },
  log: function log() {
    console.log(this.data);
  },
};
