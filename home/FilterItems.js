import Component from '../Component.js';

class FilterItems extends Component {
    onRender(select) {
        const onFilter = this.props.onFilter;

        select.addEventListener('input', () => {
            onFilter(select.value);
        });
    }

    renderHTML() {
        return /*html*/ `
        <select class="type-filter">
            <option value="" selected>All</option>
            <option value="narwhal">Narwhal</option>
            <option value="rhino">Rhino</option>
            <option value="unicorn">Unicorn</option>
            <option value="unilego">Unilego</option>
            <option value="triceratops">Triceratops</option>
            <option value="addax">Addax</option>
            <option value="markhor">Markhor</option>
            <option value="mouflon">Mouflon</option>
            <option value="chameleon">Chameleon</option>
            <option value="lizard">Lizard</option>
            <option value="dragon">Dragon</option>
        </select>
    `;
    }
}

export default FilterItems;
