export function initialize(/* container, application */) {
  SC.initialize({
    client_id: "b83f2af990b36dad655e4d31a4ad381e"
  });

  //SC.stream("/tracks/28301249", function(sound){
   //sound.play();
//});
}

export default {
  name: 'soundcloud',
  initialize: initialize
};
