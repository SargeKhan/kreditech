var assert = require('chai').assert;
var markdown = require('../lib');

describe('markdown', function(){
  describe('headings ', function(){
    it('should convert # with <h1> tag', function(){
      assert.equal(markdown.addHeading1Markdown('#This is a heading\n this is not'), 
                   '<h1>This is a heading</h1>\n this is not');
      assert.equal(markdown.addHeading1Markdown('There is no heading in this text'),
                  'There is no heading in this text')
    });
    it('should convert ## with <h2> tag', function(){
      assert.equal(markdown.addHeading2Markdown('##This is a heading\n this is not'), 
                   '<h2>This is a heading</h2>\n this is not');
      assert.equal(markdown.addHeading2Markdown('There is no heading in this text'),
                  'There is no heading in this text')

    });
    it('should convert ### with <h3> tag', function(){
      assert.equal(markdown.addHeading3Markdown('###This is a heading\n this is not'), 
                   '<h3>This is a heading</h3>\n this is not');
      assert.equal(markdown.addHeading3Markdown('There is no heading in this text'),
                  'There is no heading in this text')

    });
  })
  describe("em and strong", function(){
    it('should return convert * with <em> tag', function(){
      assert.equal(markdown.emphasizeTextMarkdown('*This is a emphasize text*\n this is not'), 
                   '<em>This is a emphasize text</em>\n this is not');
      assert.equal(markdown.emphasizeTextMarkdown('There is no emphasize text in this text'),
                  'There is no emphasize text in this text')


    });
    it('should return convert ** with <strong> tag', function(){
      assert.equal(markdown.strongTextMarkdown('**This is a strong text**\n this is not'), 
                   '<strong>This is a strong text</strong>\n this is not');
      assert.equal(markdown.strongTextMarkdown('There is no strong text in this text'),
                  'There is no strong text in this text')
    });
  })
  describe("links", function(){
    it('should  convert [name](link) with <a href=link>name</a> tag', function(){
      assert.equal(markdown.addLinkTag('[name](this.is.link)\n this is not'),
                                       '<a href="this.is.link">name</a>\n this is not');

      assert.equal(markdown.addLinkTag('[name](this.is.link)\n this is not\n'+
                                       '[name](this.is.link)\n this is not'), 
                                       '<a href="this.is.link">name</a>\n this is not\n' +
                                       '<a href="this.is.link">name</a>\n this is not');
      assert.equal(markdown.addLinkTag('There is no link in this text'),
                  'There is no link in this text')


    });
  })
})

