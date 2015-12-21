var convert = require('number-to-words');

var verses = {
  12: "12 Drummers Drumming",
  11: "11 Pipers Piping",
  10: "10 Lords-a-Leaping",
  9: "9 Ladies Dancing",
  8: "8 Maids-a-Milking",
  7: "7 Swans-a-Swimming",
  6: "6 Geese-a-Laying",
  5: "5 Golden Rings",
  4: "4 Calling Birds",
  3: "3 French Hens",
  2: "2 Turtle Doves",
  1: "And a Partridge in a Pear Tree."
};

var twelveDaysOfXmas = {
  verses: undefined,
  singGifts: function(day) {
    console.log(this.verses[day]);
    if ( day > 1 && day <= 12 ) {
      this.singGifts( day - 1 );
    }
  },
  singVerse: function(day) {
    console.log('\nOn the', convert.toWordsOrdinal(day), 'day of Christmas');
    console.log('my true love gave to me:');
    this.singGifts(day);
  },
  sing: function(verses) {
    this.verses = verses;
    if ( this.verses ) {
      console.log('The Twelve Days of Christmas');

      for ( var day = 1; day <= 12; day += 1 ) {
        this.singVerse(day);
      }

    } else {
      console.error('Sing what?');
    }
  }
};

twelveDaysOfXmas.sing(verses);
