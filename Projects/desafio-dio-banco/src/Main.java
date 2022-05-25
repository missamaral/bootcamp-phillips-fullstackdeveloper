
public class Main {

	public static void main(String[] args) {
		Cliente flavia = new Cliente();
		flavia.setNome("Flávia Amaral");
		
		Conta cc = new ContaCorrente(flavia);
		cc.depositar(1275);
		
		cc.sacar(500.00);
		
		cc.imprimirExtrato();
	}

}
