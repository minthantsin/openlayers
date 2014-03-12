goog.provide('ol.test.geom.flat');


describe('ol.geom.flat', function() {

  describe('ol.geom.flat.flipXY', function() {

    it('can flip XY coordinates', function() {
      var flatCoordinates = ol.geom.flat.flipXY([1, 2, 3, 4], 0, 4, 2);
      expect(flatCoordinates).to.eql([2, 1, 4, 3]);
    });

    it('can flip XY coordinates while preserving other dimensions', function() {
      var flatCoordinates = ol.geom.flat.flipXY(
          [1, 2, 3, 4, 5, 6, 7, 8], 0, 8, 4);
      expect(flatCoordinates).to.eql([2, 1, 3, 4, 6, 5, 7, 8]);
    });

    it('can flip XY coordinates in place', function() {
      var flatCoordinates = [1, 2, 3, 4];
      expect(ol.geom.flat.flipXY(flatCoordinates, 0, 4, 2, flatCoordinates)).
          to.be(flatCoordinates);
      expect(flatCoordinates).to.eql([2, 1, 4, 3]);
    });

    it('can flip XY coordinates in place while preserving other dimensions',
        function() {
          var flatCoordinates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
          expect(ol.geom.flat.flipXY(
              flatCoordinates, 0, 9, 3, flatCoordinates)).
              to.be(flatCoordinates);
          expect(flatCoordinates).to.eql([2, 1, 3, 5, 4, 6, 8, 7, 9]);
        });

  });

  describe('ol.geom.flat.inflateCoordinates', function() {

    it('inflates coordinates', function() {
      var coordinates = ol.geom.flat.inflateCoordinates([1, 2, 3, 4], 0, 4, 2);
      expect(coordinates).to.eql([[1, 2], [3, 4]]);
    });

  });

  describe('ol.geom.flat.inflateCoordinatess', function() {

    it('inflates arrays of coordinates', function() {
      var coordinatess = ol.geom.flat.inflateCoordinatess(
          [1, 2, 3, 4, 5, 6, 7, 8], 0, [4, 8], 2);
      expect(coordinatess).to.eql([[[1, 2], [3, 4]], [[5, 6], [7, 8]]]);
    });

  });

  describe('ol.geom.flat.reverseCoordinates', function() {

    describe('with a stride of 2', function() {

      it('can reverse empty flat coordinates', function() {
        var flatCoordinates = [];
        ol.geom.flat.reverseCoordinates(
            flatCoordinates, 0, flatCoordinates.length, 2);
        expect(flatCoordinates).to.be.empty();
      });

      it('can reverse one flat coordinates', function() {
        var flatCoordinates = [1, 2];
        ol.geom.flat.reverseCoordinates(
            flatCoordinates, 0, flatCoordinates.length, 2);
        expect(flatCoordinates).to.eql([1, 2]);
      });

      it('can reverse two flat coordinates', function() {
        var flatCoordinates = [1, 2, 3, 4];
        ol.geom.flat.reverseCoordinates(
            flatCoordinates, 0, flatCoordinates.length, 2);
        expect(flatCoordinates).to.eql([3, 4, 1, 2]);
      });

      it('can reverse three flat coordinates', function() {
        var flatCoordinates = [1, 2, 3, 4, 5, 6];
        ol.geom.flat.reverseCoordinates(
            flatCoordinates, 0, flatCoordinates.length, 2);
        expect(flatCoordinates).to.eql([5, 6, 3, 4, 1, 2]);
      });

      it('can reverse four flat coordinates', function() {
        var flatCoordinates = [1, 2, 3, 4, 5, 6, 7, 8];
        ol.geom.flat.reverseCoordinates(
            flatCoordinates, 0, flatCoordinates.length, 2);
        expect(flatCoordinates).to.eql([7, 8, 5, 6, 3, 4, 1, 2]);
      });

    });

    describe('with a stride of 3', function() {

      it('can reverse empty flat coordinates', function() {
        var flatCoordinates = [];
        ol.geom.flat.reverseCoordinates(
            flatCoordinates, 0, flatCoordinates.length, 3);
        expect(flatCoordinates).to.be.empty();
      });

      it('can reverse one flat coordinates', function() {
        var flatCoordinates = [1, 2, 3];
        ol.geom.flat.reverseCoordinates(
            flatCoordinates, 0, flatCoordinates.length, 3);
        expect(flatCoordinates).to.eql([1, 2, 3]);
      });

      it('can reverse two flat coordinates', function() {
        var flatCoordinates = [1, 2, 3, 4, 5, 6];
        ol.geom.flat.reverseCoordinates(
            flatCoordinates, 0, flatCoordinates.length, 3);
        expect(flatCoordinates).to.eql([4, 5, 6, 1, 2, 3]);
      });

      it('can reverse three flat coordinates', function() {
        var flatCoordinates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        ol.geom.flat.reverseCoordinates(
            flatCoordinates, 0, flatCoordinates.length, 3);
        expect(flatCoordinates).to.eql([7, 8, 9, 4, 5, 6, 1, 2, 3]);
      });

      it('can reverse four flat coordinates', function() {
        var flatCoordinates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        ol.geom.flat.reverseCoordinates(
            flatCoordinates, 0, flatCoordinates.length, 3);
        expect(flatCoordinates).to.eql([10, 11, 12, 7, 8, 9, 4, 5, 6, 1, 2, 3]);
      });

    });

    describe('with a stride of 4', function() {

      it('can reverse empty flat coordinates', function() {
        var flatCoordinates = [];
        ol.geom.flat.reverseCoordinates(
            flatCoordinates, 0, flatCoordinates.length, 4);
        expect(flatCoordinates).to.be.empty();
      });

      it('can reverse one flat coordinates', function() {
        var flatCoordinates = [1, 2, 3, 4];
        ol.geom.flat.reverseCoordinates(
            flatCoordinates, 0, flatCoordinates.length, 4);
        expect(flatCoordinates).to.eql([1, 2, 3, 4]);
      });

      it('can reverse two flat coordinates', function() {
        var flatCoordinates = [1, 2, 3, 4, 5, 6, 7, 8];
        ol.geom.flat.reverseCoordinates(
            flatCoordinates, 0, flatCoordinates.length, 4);
        expect(flatCoordinates).to.eql([5, 6, 7, 8, 1, 2, 3, 4]);
      });

      it('can reverse three flat coordinates', function() {
        var flatCoordinates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        ol.geom.flat.reverseCoordinates(
            flatCoordinates, 0, flatCoordinates.length, 4);
        expect(flatCoordinates).to.eql([9, 10, 11, 12, 5, 6, 7, 8, 1, 2, 3, 4]);
      });

      it('can reverse four flat coordinates', function() {
        var flatCoordinates =
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
        ol.geom.flat.reverseCoordinates(
            flatCoordinates, 0, flatCoordinates.length, 4);
        expect(flatCoordinates).to.eql(
            [13, 14, 15, 16, 9, 10, 11, 12, 5, 6, 7, 8, 1, 2, 3, 4]);
      });

    });

  });

});


goog.require('ol.geom.flat');
