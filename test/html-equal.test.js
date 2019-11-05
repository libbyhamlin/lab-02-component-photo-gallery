const test = QUnit.test;

test('normalizes whitespace', assert => {
  // Arrange
    const html = /*html*/ `
            <div>
                <span>message</span>
            </div>
    `;
    const expected = /*html*/ `
        <div>
                <span>message</span>
        </div>
    `;

    assert.htmlEqual(html, expected);
});
