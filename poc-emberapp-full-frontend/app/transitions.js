// https://github.com/ember-animation/liquid-fire
// http://ember-animation.github.io/liquid-fire/#/cookbook
// http://ember-animation.github.io/liquid-fire/#/transitions/predefined
// toLeft, toRight, toUp, toDown, crossFade, fade,
export default function() {
  // main transitions
  this.transition(
    this.fromRoute('index'),
    this.toRoute(['product','product.list','product.new','about']),
    this.use('crossFade', {duration: 2000})
    //this.debug()
  );
  // nested transitions (not working)
  this.transition(
    this.fromRoute('product.list'),
    this.withinRoute(/^product/),
    this.use('crossFade', {duration: 2000})
    //this.debug()
  );
 }
