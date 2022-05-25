import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public abstract class Conta implements IConta {
	
	private static final int AGENCIA_PADRAO = 1;
	private static int SEQUENCIAL = 100;
	
	protected int agencia;
	protected int numero;
	protected double saldo;
	protected LocalDateTime dataDeAbertura;
	protected Cliente cliente;
	protected List<Movimentacao> movimentacoes;

	public Conta(Cliente cliente) {
		this.dataDeAbertura = LocalDateTime.now();
		this.cliente = cliente;
		this.agencia = Conta.AGENCIA_PADRAO;
		this.numero = SEQUENCIAL++;
		this.movimentacoes = new ArrayList<>();
	}

	public int getAgencia() {
		return agencia;
	}

	public int getNumero() {
		return numero;
	}

	public double getSaldo() {
		return saldo;
	}
	
	public List<Movimentacao> getMovimentacoes() {
		return movimentacoes;
	}

	public void setMovimentacoes(List<Movimentacao> movimentacoes) {
		this.movimentacoes = movimentacoes;
	}

	@Override
	public void sacar(double valor) {
		saldo -= valor;
		Movimentacao saque = new Movimentacao(LocalDateTime.now(), valor, MovimentacaoTipo.SAQUE);
		movimentacoes.add(saque);
		System.out.printf("\nSaque de R$ %.2f efetuado. Retire suas cédulas.\n", valor);
	}

	@Override
	public void depositar(double valor) {
		saldo += valor;
		Movimentacao deposito = new Movimentacao(LocalDateTime.now(), valor, MovimentacaoTipo.DEPOSITO);
		movimentacoes.add(deposito);
		System.out.printf("\nDepósito de R$ %.2f efetuado. Seu novo saldo é R$ %.2f.\n", valor, getSaldo());
	}

	@Override
	public void transferir(double valor, Conta contaDestino) {
		this.sacar(valor);
		contaDestino.depositar(valor);
		Movimentacao transferencia = new Movimentacao(LocalDateTime.now(), valor, MovimentacaoTipo.TRANSFERENCIA);
		movimentacoes.add(transferencia);
		System.out.printf("\nTransferência no valor de R$ %.2f efetuada. Seu novo saldo é R$ %.2f.\n", valor, getSaldo());
	}
	
	protected void imprimirInformacoesComuns() {
		System.out.println(String.format("Titular: %s", this.cliente.getNome()));
		System.out.println(String.format("Agência: %d", this.agencia));
		System.out.println(String.format("Número: %d", this.numero));
		System.out.println(String.format("Saldo: R$ %.2f", this.saldo));
		for (Movimentacao movimentacao : movimentacoes) {
			System.out.printf("\nData: %s  |  %s  |  Valor: R$ %.2f", movimentacao.getData(), movimentacao.getTipo(), movimentacao.getValor());
		}
	}
	
	

}
