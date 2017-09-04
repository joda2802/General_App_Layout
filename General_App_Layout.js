
//Called when application is started.
function OnStart()
{

	layTitle = app.CreateLayout('linear','VCenter,FillXY'  );
	
	layTitle.SetBackColor( 'white');
	
	app.AddLayout( layTitle );
	
	txtTitle = app.CreateText( 'Title' );
	txtTitle.SetTextSize( 50 );
	txtTitle.SetTextColor( "black" );
	
		imgTitle2 = app.CreateImage( null, 1,0.01 );
	
	layTitle.AddChild( imgTitle2);
	
	layTitle.AddChild( txtTitle );
	
	imgTitle = app.CreateImage( null, 1,0.01 );

  DrawPicture()
	layTitle.AddChild( imgTitle );
	
	 }
	 function DrawPicture()
{
	 imgTitle.SetBackColor( "black" );
		imgTitle2.SetBackColor( "black" );
  }
