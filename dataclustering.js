function clustering(test,visited,cluster,count_cluster,count_nodes,x,y,n)
{
	var temp = test[x][y]
	cluster[x][y] = count_cluster
	count_nodes = count_nodes + 1
	// console.log(count_nodes)
	visited[x][y] = 1
	if(x-1>=0)
	{ 
		// console.log("left")
		if(test[x-1][y]==temp && visited[x-1][y]==0)
			{
				arguments.callee(test,visited,cluster,count_cluster,count_nodes,x-1,y,n)
			}
	}
	if(x+1<n)
	{
			// console.log("right")
			if(test[x+1][y]==temp && visited[x+1][y]==0)
				{
					arguments.callee(test,visited,cluster,count_cluster,count_nodes,x+1,y,n)
				}
		}
	if(y-1>=0)
	{
			// console.log("up")
			if(test[x][y-1]==temp && visited[x][y-1]==0)
				{
					arguments.callee(test,visited,cluster,count_cluster,count_nodes,x,y-1,n)
				}
		}
	if(y+1<n)
	{
			// console.log("down")
			if(test[x][y+1]==temp && visited[x][y+1]==0)
				{
					arguments.callee(test,visited,cluster,count_cluster,count_nodes,x,y+1,n)
				}
		}
	if(x-1>=0 && y+1<n)
	{
			// console.log("bottom left") 
			if(test[x-1][y+1]==temp && visited[x-1][y+1]==0)
				{
					arguments.callee(test,visited,cluster,count_cluster,count_nodes,x-1,y+1,n)
				}
		}
	if(x-1>=0 && y-1>=0)
	{
			// console.log("up left") 
			if(test[x-1][y-1]==temp && visited[x-1][y-1]==0)
				{
					arguments.callee(test,visited,cluster,count_cluster,count_nodes,x-1,y-1,n)
				}
		}
	if(x+1<n && y+1<n)
	{ 
			// console.log("bottom right")
			if(test[x+1][y+1]==temp && visited[x+1][y+1]==0)
				{
					arguments.callee(test,visited,cluster,count_cluster,count_nodes,x+1,y+1,n)
				}
		}
	if(x+1<n && y-1>=0)
	{ 
			// console.log("up right")
			if(test[x+1][y-1]==temp && visited[x+1][y-1]==0)
				{
					arguments.callee(test,visited,cluster,count_cluster,count_nodes,x+1,y-1,n)
				}
	}
	
}

var test = [[7,7,6,4,2,1,0,0,0,1],
		[5,7,6,6,2,1,1,0,0,0],
		[5,6,7,7,2,0,0,0,0,1],
		[5,6,7,7,2,0,0,0,0,1],
		[4,6,2,2,7,0,1,1,5,0],
		[1,1,0,0,0,7,7,6,4,2],
		[0,0,0,0,0,7,7,5,7,2],
		[0,0,0,0,1,6,7,7,5,2],
		[0,0,0,0,1,6,7,5,7,2],
		[1,0,1,1,0,6,6,6,0,7]]

// var img = document.getElementById("image");
// console.log(img)
var visited = [];
for(var x = 0;x<1000;x++)
{
	visited[x] =[]
	for(var y =0;y<1000;y++)
	{
		visited[x][y] = 0;
	}
}
var cluster = []
for(var x = 0;x<1000;x++)
{
	cluster[x] =[]
	for(var y =0;y<1000;y++)
	{
		cluster[x][y] = -1;
	}
}
var count_cluster = 1
var count_nodes = 0
for(var i =0 ; i<10;i++)
{
	for(var j =0;j<10;j++)
	{
		if(test[i][j]==0)
		{
			cluster[i][j] = 0;
			continue;
		}
		if(visited[i][j]==0 && test[i][j]!=0){
					clustering(test,visited,cluster,count_cluster,0,i,j,10);
					count_cluster += 1;
				}
		else
		{
			continue
		}
	}
}
for(var i=0;i<10;i++)
{
	var s = ""
	for(var j=0;j<10;j++)
	{
		s = s + test[i][j] + " "
		// console.log(cluster[i][j]);
	}
	console.log(s)
}
console.log("")
// for(var i=0;i<10;i++)
// {
// 	var s = ""
// 	for(var j=0;j<10;j++)
// 	{
// 		s = s + visited[i][j] + " "
// 		// console.log(cluster[i][j]);
// 	}
// 	console.log(s)
// }
// console.log("")
for(var i=0;i<10;i++)
{
	var s = ""
	for(var j=0;j<10;j++)
	{
		s = s + cluster[i][j] + " "
		// console.log(cluster[i][j]);
	}
	console.log(s)
}