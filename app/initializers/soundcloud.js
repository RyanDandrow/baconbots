export function initialize(container, application) {
  SC.initialize({
    client_id: "b83f2af990b36dad655e4d31a4ad381e"
  });

  application.inject('component', 'soundcloud', 'service:soundcloud-player');
}

export default {
  name: 'soundcloud',
  initialize: initialize
};
