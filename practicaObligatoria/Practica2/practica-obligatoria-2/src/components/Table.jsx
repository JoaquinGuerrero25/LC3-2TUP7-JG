import PropTypes from 'prop-types'
import './Table.css'

const Table = ({ netIncomes }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Marca</th>
                    <th>Ingreso</th>
                </tr>
            </thead>
            <tbody>
                {netIncomes.map((income, index) => (
                    <tr key={index}>
                        <td>{income.brand}</td>
                        <td>{income.income}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

Table.propTypes = {
    netIncomes: PropTypes.arrayOf(
        PropTypes.shape({
            brand: PropTypes.string.isRequired,
            income: PropTypes.number.isRequired
        })
    ).isRequired
}

export default Table;