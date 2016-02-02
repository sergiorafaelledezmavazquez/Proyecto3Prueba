var OBJ_Examen = {  
'modulo':'m0001',
'nombre_modulo':'DE LA INFORMACION AL CONOCIMIENTO',
'imagen_examen':'imagen.png',
'calificacion_examen':'0',	
'array_unidades':[ //---<array_unidades>-----------------------------------------------		
					{'unidad':'u0001', //---<UNIDAD1>-----------------------------------
					 'nombre_unidad':'APRENDER A LOGRAR METAS PERSONALES',
					 'imagen_unidad':'imagen.png',
					 'calificacion_unidad':'0',
							 'array_temas':[ //--<array_temas>-------------------------				             
											 {'tema':'t0001', //------<tema 1>-------- 
											  'nombre_tema':'NECESIDADES, METAS, TOMA DE DECISIONES',
											  'imagen_tema':'imagen.png',
											  'calificacion_tema':'0',
											  'array_preguntas':[ //--<array_preguntas>-----------------
												  //<pregunta>------------------------------------
												  {'pregunta':'p0001',
												   'tipo_pregunta':'001',
												   'grupo':'AAA',
												   'instrucciones':'Bla bla',
												   'enunciado_pregunta':'¿Cuál es la razón por la que estudias el bachillerato?',
												   'imagen_pregunta':'imagen.png',
												   'calificacion_pregunta':'0', 
												   'array_respuestas':[//<array_respuestas>-------
													     //--RESPUESTA
													     {'respuesta':'001', 
														  'valor':'1', 
														  'imagen_respuesta':'imagen.png', 
														  'enunciado_respuesta':'Ampliar tus conocimientos.'
														  },
													     //--RESPUESTA
													     {'respuesta':'002', 
														  'valor':'0', 
														  'imagen':'imagen.png', 
														  'enunciado_respuesta':'¿Pregunta?'
														  },
													   ]//</array_respuestas>-------
											       }, //</pregunta>------------------------------	  
												  ]//--</array_preguntas>-----------------
											  },//------</tema 1>-----------------
											  ]//--</array_temas>---------------------- 	  
				    },//---</UNIDAD1>--------------------------------------------------
				]//---</array_unidades>------------------------------------------------	
};//---</OBJ_Examen>