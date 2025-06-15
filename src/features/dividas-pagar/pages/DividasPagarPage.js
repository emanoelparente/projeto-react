import SaldoAtual from '../../../components/shared/saldo-atual/SaldoAtual';
import FiltroSelecaoDatas from '../../../components/shared/filtro-selecao-datas/FiltroSelecaoDatas';
import DividasPagarTabelaLancamentos from '../components/dividas-pagar-tabela-lancamentos/DividasPagarTabelaLancamentos';
const DividasPagarPage = () => {
    return (
        <div>
            <FiltroSelecaoDatas></FiltroSelecaoDatas>
            <DividasPagarTabelaLancamentos></DividasPagarTabelaLancamentos>
        </div>
    );


};

export default DividasPagarPage;
