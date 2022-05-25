import java.time.LocalDateTime;

public class Movimentacao {
	
	private LocalDateTime data;
	private double valor;
	private MovimentacaoTipo tipo;
	
	public Movimentacao (LocalDateTime data, double valor, MovimentacaoTipo tipo) {
		this.data =  LocalDateTime.now();
		this.valor = valor;
		this.tipo = tipo;
	}
	
	public LocalDateTime getData() {
		return data;
	}

	public double getValor() {
		return valor;
	}

	public void setValor(double valor) {
		this.valor = valor;
	}

	public MovimentacaoTipo getTipo() {
		return tipo;
	}

	public void setTipo(MovimentacaoTipo tipo) {
		this.tipo = tipo;
	}

}
