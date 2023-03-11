public class pattern
{
	public static void main(String args[])
	{
		int rows, i, j, space=1;
		rows=5;
		space=rows-1;
		for(j=1;j<=rows;j++){
			for(i=1;i<=space;i++){
				System.out.print(" ");
			}
			space--;
			for(i=1;i<=2*j-1;i++){
				System.out.print("*");
			}
			System.out.println("");
		}
	
	}

}