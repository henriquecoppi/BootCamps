programa
// função do algoritimo calcular a media aritimetica
// autor: henrique silva coppi
	
	funcao inicio()
	{
	real nota1, nota2, nota3, nota4, media
	cadeia aluno

	
	escreva ("nome do aluno ")
	leia (aluno)
	escreva("Digite nota 1= ")
     leia (nota1)
     escreva("Digite nota 2= ")
     leia (nota2)
     escreva("Digite nota 3= ")
     leia (nota3)
     escreva("Digite nota 4= ")
     leia (nota4)


     media = (nota1+nota2+nota3+nota4)/4
     
     escreva ("sua media é " + media)
// verifica se a media é maior ou igual a 7
     se (media>=7){
        escreva ("\n" + "Parabens!! Voce doi Aprovado")
 	
	}
// caso a media for menor que 7	
	senao {
		escreva ("\n" + "infelizmente voce foi reprovado")
		
		}
	}
	
		
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 525; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */