describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles a moderate array', function(){
    expect(bubbleSort([5,90,43,26,3,1056,-5])).toEqual([-5,3,5,26,43,90,1056]);
  });
});
