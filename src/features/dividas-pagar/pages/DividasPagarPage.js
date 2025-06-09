import SaldoAtual from '../../../components/shared/saldo-atual/SaldoAtual';
import FiltroSelecaoDatas from '../../../components/shared/filtro-selecao-datas/FiltroSelecaoDatas';
const DividasPagarPage = () => {
    return (
        <div>
            <div>Dividas a pagar</div>
            <SaldoAtual />
            <FiltroSelecaoDatas></FiltroSelecaoDatas>
        </div>
    );


};

export default DividasPagarPage;
