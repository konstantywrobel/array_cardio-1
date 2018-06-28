    const mortals = [
     
      { first: 'Maria', last: 'Skłodowska', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    // Array.prototype.filter()
      
      const century = mortals.filter(mortal => (mortal.year >= 1400 && mortal.year < 1500));
      console.table(century)
      
    // Array.prototype.map()
      
     const fullName = mortals.map(mortals => `${mortals.first} ${mortals.last}`);
     console.table(fullName);
      
    // Array.prototype.sort()
      
      const oldered = mortals.sort((a, b) => a.year > b.year ? 1 : -1);
      console.table(oldered);

    // Array.prototype.reduce()
   
      const totalYears = mortals.reduce((total, mortal) => {
          return total + (mortal.passed - mortal.year);
      }, 0);
      console.log(totalYears);
      
    // Sort the mortal by years lived

      const oldest = mortals.sort(function(a, b){
          const lastMortal = a.passed - a.year;
          const nextMortal = b.passed - b.year;
          return lastMortal > nextMortal ? -1 : 1;
      });
      console.table(oldest);