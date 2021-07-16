window.DATA_QUESTION_TIU = (()=>{
	const p_stringTrim = (()=>{
		const reg_newLine = /\n/g;
		const reg_doubleSpace = /\s\s+/g;
		return (s)=>{
			return s.replace(reg_newLine, " ").replace(reg_doubleSpace, " ").trim();
		};
	})();
	const stringQuestions = `KULMINASI
		///Lazim
		///Rendah
		///Tingkatan
		///Puncak
		///Induvidu
		///d

		///LEGALITAS
		///Keabsahan
		///Masalah hukum
		///Tanda setuju
		///Tidak sah
		///Persetujuan
		///a

		///PAGAN >< ....
		///Kukuh
		///Pudar
		///Pagar
		///Labil
		///Teguh
		///d

		///OTOKRATIS >< ...
		///Demokratis
		///Federasi
		///Hegemoni
		///Imperialism
		///Kolonial
		///a

		///DESAINER : BAJU
		///Tukang : rancangan
		///Guru : soal
		///Tukang kayu : mebel
		///Hakim : pengadilan
		///Polisi : aparat
		///c

		///... : JOGLO = SULAWESI SELATAN : ...
		///Jawa Tengah - Baileo
		///DIY - Tongkonan
		///Jawa Barat - Honai
		///Banten - Badui
		///Jawa Timur- Musalaki
		///b


		///
		///Kalimantan Barat
		///Sulawesi Barat
		///Gorontalo
		///Bali
		///Nusa Tenggara Barat
		///a

		///
		///Mendidih
		///Mencair
		///Menyublim
		///Membeku
		///Menguap
		///a

		///Tinggi badan Roi lebih tinggi daripada tinggi Rian dan Rumi. 
		Tinggi badan Rusdi lebih tinggi dari Rian dan Roi. 
		Rian memiliki tinggi badan lebih tinggi daripada Rumi.
		Jika tidak ada diantara mereka yang memiliki tinggi badan yang sama, maka?
		
		///Roi lebih tinggi dari Rusdi
		///Total tinggi Rusdi dan Rumi sama dengan total tinggi Roi dan Rian
		///Tinggi Rusdi merupakan total dari tinggi badan Roi, Rian, dan Rumi
		///Rumi memiliki tinggi paling rendah
		///Rumi menempati urutan tertiggi ke-3
		///d

		///Pada sebuah meja bundar terdapat 8 kursi yang diduduki oleh 7 orang. 
		Antara B dan C diduduki oleh D. E tidak bersebelahan dengan C.
		A duduk tepat di depan B. G duduk berhadapan dengan D. 
		Jika kursi tepat di sebelah kiri B tidak diduduki siapapun, 
		maka posisi F adalah?
		
		///Di sebelah kursi kosong
		///Berhadapan dengan C
		///Terletak 3 kursi setelah D
		///Di sebelah A dan berhadapan dengan kursi kosong
		///Di sebelah A dan berhadapan dengan D
		///d

		///Amri, Budi, Cahya, Dion, Erlangga, Fauzan adalah kariawan yang bertugas secara bergantian di sebuah kantor pos.
		Mereka hanya bekerja 1 hari dalam seminggu.  Budi bekerja 1 hari setelah Amri dan 2 hari setelah Erlangga.
		Fauzan bekerja tepat sebelum Cahya. Cahya hanya bisa bekerja pada hari sabtu
		Jika tidak ada satupun yang bekerja pada hari minggu dan 
		Erlangga hanya bisa bekerja pada hari Senin, maka?
			
		///Budi bekerja pada hari Selasa
		///Fauzan bekerja 1 hari setelah dion
		///Fauzan bekerja 2 hari setelah dion
		///Dion bekerja pada hari selasa
		///Hari jum'at diisi oleh Amri
		///b

		///Jarak rumah Ahmad menuju kota A sama dengan 2 kali lipat jarak antara kota D dan F. 
		Kota C terletak diantara kota F dan D. Kota F berada paling jauh dari rumah Ahmad. 
		Jika kota A adalah kota terdekat dan memiliki jarak 40 km menuju kota D, maka?
		
		///Kota C berjarak 15 km dengan kota F
		///Kota C berjarak 15 km dengan kota D
		///Kota D berjarak 40 km dengan kota F
		///Kota F berjarak 70 km dengan kota A
		///Kota F berjarak 40 km dengan kota A
		///d


		///\\(\\frac{72^{3} + 25^{3}}{72 \\times 47 + 25^{2}} =\\) ...
		///1.800
		///360
		///97
		///7
		///1
		///c
		
		
		///2\\(\\frac{1}{4}\times7,5-7,5\div\frac{3}{2} =\\) ....
		///51,87
		///23,69
		///21,48
		///11,875
		///12,58
		///d
		
		///2,20\times0,75+\frac{3}{5}\div\frac{1}{8} =\\) ....
		///1,89
		///10,05
		///15,5
		///9,8
		///5,9
		///e


		///\\(2020^{2} - 2019^{2} - 2018^{2} - 2017^{2} - ... - 2^{2} - 1^{2} =\\) ...
		///2.431.000
		///2.410.230
		///2.223.100
		///2.043.230
		///2.041.210
		///e

		///15, 15, 14, 12, 9, 5, ...
		///3
		///2
		///1
		///0
		///0.5
		///d

		///\\(\\frac{1}{2}, \\frac{2}{10}, \\frac{3}{17}, \\frac{4}{24}, \\frac{5}{31},\\) ...
		///\\(\\frac{5}{38}\\)
		///\\(\\frac{6}{38}\\)
		///\\(\\frac{6}{37}\\)
		///\\(\\frac{7}{37}\\)
		///\\(\\frac{7}{38}\\)
		///b
		

		///A, N, C, P, F, S, J, ...
		///W
		///X
		///T
		///U
		///V
		///a

		///Jika \\((2a - 2b)^{2} = (2a + 2b)\\) dan b adalah bilangan bulat negative, maka...
		///\\(a > 0\\)
		///\\(a < 0\\)
		///\\(a = 0\\)
		///\\(a > 2\\)
		///\\(a < -2\\)
		///c


		///Jika x rata-rata dari 4a, 7a, 6a, dan 5, sedangkan y rata-rata dari 3a, 5a, 9a dan 4, maka...
		///\\(x > y\\)
		///\\(x < y\\)
		///\\(x = y\\)
		///\\(5x = 4y\\)
		///\\(4x = 5y\\)
		///a

		///Jika p = 2q-r, q = r + 3, dan r = 2, maka...
		///p < r < q
		///p < q < r
		///q < r < p
		///r < p < q
		///r < q < p
		///e

		///Dari 50 siswa, 20 orang mendapatkan nilai tidak lebih dari 45. 10 siswa mendapatkan nilai tidak kurang dari 76. 
		Rentang nilai adalah 0 sampai 100. Berapakah rata-rata nilai paling tinggi dari kelima puluh siswa tersebut?
		///81
		///78
		///73,2
		///64,8
		///53,2
		///b


		///Ihwan menempuh sebuah perjalanan sejauh 200 km dengan mengendarai mobil. Separuh perjalanannya ia tempuh dengan kecepatan rata-rata 60km/jam dan sisanya ditempuh dengan kecepatan rata-rata 40 km/jam. Rata-rata kecepatan seluruh perjalanannya adalah...
		///58 km/jam
		///54 km/jam
		///50 km/jam
		///48 km/jam
		///42 km/jam
		///d

		///Untuk mendapatkan total untung 21%, seorang pedagang harus menjual 100 porsi bakso dengan harga jual Rp11.000,00 per porsi. Karena sepi ia hanya mampu menjual 87 porsi. Berapakah selisih persentase yang diharapkan dan yang diperoleh?
		///5,3 %
		///13%
		///15%
		///16%
		///18,3%
		///d

		///Setiap mahasiswa berprestasi terkenal di kampus. Setiap mahasiswa yang aktif dalam pembelajaran pasti berprestasi. Sebagian mahasiswa MIPA terkenal di kampusnya. Maka...
		///Setiap mahasiswa yang terkenal adalah mahasiswa MIPA.
		///Sebagian yang aktif dalam pembelajaran adalah mahasiswa MIPA.
		///Sebagian mahasiswa MIPA tidak aktif dalam pembelajarannya.
		///Semua mahasiswa yang tidak berprestasi adalah mahasiswa yang tidak terkenal.
		///Semua mahasiswa yang berprestasi adalah mahasiswa MIPA.
		///c
		
		///Jika hari ini hujan, maka air diselokan meluap ke jalan.
		Jika air selokan meluap ke jalan, maka sebagian sepeda motor tidak dapat melintasi jalan tersebut.
		Kesimpulan yang tepat adalah...
		///Semua sepeda montor tidak dapat melintasi jalan tersebut.
		///Jika hari hujan, maka sepeda montor tidak dapat melintas jalan.
		///Sebagian sepeda montor dapat melintasi jalan tersebut.
		///Semua sepeda montor dapat melintasi jalan tersebut jika air meluap.
		///Sebagian yang bisa lewat jalan tersebut saat hujan bukan merupakan sepeda montor.
		///c
		
		///Dalam sebuah acara biro jodoh, terdapat beberapa fakta menarik.
		Bram berusia 37 tahun dan berprofesi sebagai pengamat ekonomi. Dia tertarik kepada wanita yang usianya tidak lebih dari 30 tahun. Nurul tertarik dengan lelaki selain suku Jawa. Usia Nurul setahun lebih muda dibandingkan usia Dian. Dian tertarik dengan pria Jawa yang usianya di bawahnya. Hardi tertarik dengan perempuan kuning langsat berusia lebih tua darinya dan berprofesi sebagai akuntan. Hardi berusia 5 tahun lebih muda daripada Nurul. Hardi seorang dokter dari Papua. Dita hanya ingin menjadi istri Dokter. Usia Dita 3 tahun lebih muda daripada Dian. Sekarang usia nurul 31 tahun.
		Dari fakta tersebut, siapakah yang hampir tidak berpeluang mendapatkan pasangan?
		///Bram dan Dita
		///Dita dan Nurul
		///Dian dan Bram
		///Nurul dan Dian
		///Hardi dan Dita
		///c
		
		///Seorang pedagang membeli 2 karung beras masing-masing seberat 1 kuintal dengan tara 2,5%. 
		Harga pembelian setiap karung beras Rp200.000,00. Jika beras itu dijual dengan harga Rp2.400,00 per kilogram, 
		maka besar keuntungan penjual sebesar...
		///Rp34.000,00 
		///Rp56.000,00 
		///Rp68.000,00
		///Rp80.000,00
		///c

		///Fulan berangkat dari kota P menuju kota Q pada pukul 07.00 dengan kecepatan rata-rata 60 km/jam. 
		///Pada saat yang sama, Anta berangkat dari kota Q menuju kota P dengan kecepatan rata-rata 40 km/jam. 
		///Jika jarak kota P dan Q adalah 360 km,  maka Fulan dan Anta akan bertemu pada pukul?
		///16:00 
		///13:00 
		///10:36
		///10:12
		///c

		///<img data-original-height="103" data-original-width="475" src="https://1.bp.blogspot.com/-BDoPLqG7Rzg/YO9Uzrd7hoI/AAAAAAAAC1M/i9qmhDFzwlQiyQHsjlMIRFLLBCDVYVa4gCLcBGAsYHQ/s0-rw/gambar%2Btiu%2B66.jpg"/>
		///<img data-original-height="105" data-original-width="112" src="https://1.bp.blogspot.com/-HiIU_78EII0/YO9Uyb4nPCI/AAAAAAAAC1A/kqlZHwbxNJMxMpCrj7gVtBBOgXQ1EkAIACLcBGAsYHQ/s0-rw/gambar%2Btiu%2B66%2B-%2Ba.jpg"/>
		///<img data-original-height="105" data-original-width="113" src="https://1.bp.blogspot.com/-QaS-tdnPH04/YO9UyXy4awI/AAAAAAAAC1E/isW8Et3TskIa5iXChFr66eCUUWTgi12wwCLcBGAsYHQ/s0-rw/gambar%2Btiu%2B66%2B-%2Bb.jpg"/>
		///<img data-original-height="104" data-original-width="112" src="https://1.bp.blogspot.com/-QM6FTMYCwJc/YO9UyRvaiyI/AAAAAAAAC08/Y64cRBUJsUkejuemcj0rSUH55z3ChTd9gCLcBGAsYHQ/s0-rw/gambar%2Btiu%2B66%2B-%2Bc.jpg"/>
		///<img data-original-height="105" data-original-width="111" src="https://1.bp.blogspot.com/-kcOIWly4UY8/YO9Uzefvv_I/AAAAAAAAC1I/MXl9h73tv30Q14EeUOlo-vCijnWd5SgmgCLcBGAsYHQ/s0-rw/gambar%2Btiu%2B66%2B-%2Bd.jpg"/>
		///<img data-original-height="106" data-original-width="112" src="https://1.bp.blogspot.com/-auyVmjKEDkQ/YO9UzsllCbI/AAAAAAAAC1Q/Em5GWzn6NkczctBVMR9l4TO-sSIhsS_pgCLcBGAsYHQ/s0-rw/gambar%2Btiu%2B66%2B-%2Be.jpg"/>
		///a
		

		///<img data-original-height="100" data-original-width="110" src="https://1.bp.blogspot.com/-MkP5ZPrB7KE/YO9v8bWo6HI/AAAAAAAAC3o/1kXcnP8P_dQm5budOfqzhNgrsDVrLWgYwCLcBGAsYHQ/s0-rw/gambar%2Btiu%2B67.jpg"/>
		///<img data-original-height="101" data-original-width="112" src="https://1.bp.blogspot.com/-31XTjvLrm_Y/YO9v8asMgCI/AAAAAAAAC3s/Z3gxCt1n3MYzEkOpvX6f9l7gU7OA04PMgCLcBGAsYHQ/s0-rw/gambar%2Btiu%2B67%2B-%2Ba.jpg"/>
		///<img data-original-height="102" data-original-width="112" src="https://1.bp.blogspot.com/-XVMMcKE3aYI/YO9gfnvgIOI/AAAAAAAAC2s/WGc-gXRrpmMn08k8l4B0P8Xhe8maFxDOACLcBGAsYHQ/s0-rw/gambar%2Btiu%2B67%2B-%2Bb.jpg"/>
		///<img data-original-height="102" data-original-width="111" src="https://1.bp.blogspot.com/-U194gGmUiIQ/YO9gfv81chI/AAAAAAAAC2o/iaFUTY38NG4yf9PSkXyyIRwzax6Ckjx6gCLcBGAsYHQ/s0-rw/gambar%2Btiu%2B67%2B-%2Bc.jpg"/>
		///<img data-original-height="101" data-original-width="114" src="https://1.bp.blogspot.com/-7rYoEVLQshQ/YO9ggRLuFSI/AAAAAAAAC2w/OgwM4A6M9a4hFn5m1iR8ppfJW-4BnvsNgCLcBGAsYHQ/s0-rw/gambar%2Btiu%2B67%2B-%2Bd.jpg"/>
		///<img data-original-height="103" data-original-width="114" src="https://1.bp.blogspot.com/-q7sGZDW_ZVU/YO9gggiiQVI/AAAAAAAAC20/68hcskekQxM3yKfVThcl269_nhp1HIbbwCLcBGAsYHQ/s0-rw/gambar%2Btiu%2B67%2B-%2Be.jpg"/>
		///e
		

		///
		///<img data-original-height="122" data-original-width="133" src="https://1.bp.blogspot.com/-aFXGkYdzw4k/YO9U0JsSQkI/AAAAAAAAC1U/bCu3KIerW30Oo5yqo4xG15bd_-dJPENqACLcBGAsYHQ/s0-rw/gambar%2Btiu%2B68%2B-%2Ba.jpg"/>
		///<img data-original-height="122" data-original-width="134" src="https://1.bp.blogspot.com/-nTbGWp_dQWA/YO9U0SKKMNI/AAAAAAAAC1Y/cB5JoZJw4AggmX7ZmIm6WBTCdh4ekNhAQCLcBGAsYHQ/s0-rw/gambar%2Btiu%2B68%2B-%2Bb.jpg"/>
		///<img data-original-height="121" data-original-width="133" src="https://1.bp.blogspot.com/-gVEMZfALhD0/YO9U0ZVkVfI/AAAAAAAAC1c/csbcrUfc73UTpiv6cbbM8m-RnfxPHfx4ACLcBGAsYHQ/s0-rw/gambar%2Btiu%2B68%2B-%2Bc.jpg"/>
		///<img data-original-height="123" data-original-width="134" src="https://1.bp.blogspot.com/-szZsZ7f9h2c/YO9U0rwDhMI/AAAAAAAAC1g/rbNKSAyC2XMy-yCl1n_T5IJYRATlvProwCLcBGAsYHQ/s0-rw/gambar%2Btiu%2B68%2B-%2Bd.jpg"/>
		///<img data-original-height="122" data-original-width="134" src="https://1.bp.blogspot.com/-lDeJhf8ngs0/YO9U04kJl3I/AAAAAAAAC1k/wFj7tspoZ9oLEXu3DU2KeRYxWIRCewH6gCLcBGAsYHQ/s0-rw/gambar%2Btiu%2B68%2B-%2Be.jpg"/>
		///d

		///
		///<img data-original-height="114" data-original-width="125" src="https://1.bp.blogspot.com/-FNGh8eUMkHw/YO9cisMRy6I/AAAAAAAAC2E/3mRwxfSHW4Q3_RsNHPCggAb0onEkKOlZACLcBGAsYHQ/s0-rw/gambar%2Btiu%2B69%2B-%2Ba.jpg"/>
		///<img data-original-height="115" data-original-width="126" src="https://1.bp.blogspot.com/-LdUIgBeBvko/YO9cin9zAII/AAAAAAAAC2A/SPEDfFN1PgwGjhtEEpDQ6E-fdIiY0MFdQCLcBGAsYHQ/s0-rw/gambar%2Btiu%2B69%2B-%2Bb.jpg"/>
		///<img data-original-height="115" data-original-width="125" src="https://1.bp.blogspot.com/-WblPJSG8QeY/YO9ciu9bD1I/AAAAAAAAC18/Nae4n7Vt830QhK3GSV530dfX9-Wz2ObdwCLcBGAsYHQ/s0-rw/gambar%2Btiu%2B69%2B-%2Bc.jpg"/>
		///<img data-original-height="115" data-original-width="125" src="https://1.bp.blogspot.com/-ZPb3pc10VkY/YO9cjZHdxuI/AAAAAAAAC2I/g7wg6LAi98AOYNH7mT_EUppOPOal60ECwCLcBGAsYHQ/s0-rw/gambar%2Btiu%2B69%2B-%2Bd.jpg"/>
		///<img data-original-height="115" data-original-width="123" src="https://1.bp.blogspot.com/-fBcQdxIZGXY/YO9cjkk1lpI/AAAAAAAAC2M/bTkHQy8xQqo5HoT-fdnUY8Ts4ex1KFK6gCLcBGAsYHQ/s0-rw/gambar%2Btiu%2B69%2B-%2Be.jpg"/>
		///d

		///
		///<img data-original-height="100" data-original-width="111" src="https://1.bp.blogspot.com/-1mPV_Fe1SBE/YO9spxQg-iI/AAAAAAAAC3Q/dLRJrSfroVMTR9v5pOOBgHNOioJQQ34UQCLcBGAsYHQ/s0-rw/gambar%2Btiu%2B70%2B-%2Ba.jpg"/>
		///<img data-original-height="101" data-original-width="109" src="https://1.bp.blogspot.com/-51i9YutIYXw/YO9sp2zYrAI/AAAAAAAAC3M/OFwLuPQ7zvIGWtBJdC9sp31hTFECjbN3ACLcBGAsYHQ/s0-rw/gambar%2Btiu%2B70%2B-%2Bb.jpg"/>
		///<img data-original-height="101" data-original-width="110" src="https://1.bp.blogspot.com/-QYH4R5-7s_E/YO9sp8wqi8I/AAAAAAAAC3I/kOEQUfTz3LoRiXCqhmoyL6CfD-LQX9QBgCLcBGAsYHQ/s0-rw/gambar%2Btiu%2B70%2B-%2Bc.jpg"/>
		///<img data-original-height="101" data-original-width="111" src="https://1.bp.blogspot.com/-Xk07pSIvV_c/YO9sqeYLKDI/AAAAAAAAC3U/dAmZTuTHhJUo44ikqobVnWRaAYy2CdZhgCLcBGAsYHQ/s0-rw/gambar%2Btiu%2B70%2B-%2Bd.jpg"/>
		///<img data-original-height="100" data-original-width="110" src="https://1.bp.blogspot.com/-V2xLhnCxBaE/YO9sqpoGDlI/AAAAAAAAC3Y/0cncRi5XdnMXxqbR3M8B0NtfvlHG39WlgCLcBGAsYHQ/s0-rw/gambar%2Btiu%2B70%2B-%2Be.jpg"/>
		///c`;
	
	const returned = [];
	const arrayStringQuestions = [];
	const pieces = stringQuestions.split("///");
	const alpabetIndex = ["a", "b", "c", "d", "e"];
	const group = "TES INTELIGENSI UMUM";
	const groupAlias = "tiu";
	const len = pieces.length;
	let currentIndex = 0;
	let currentItem;
	for(let i=0;i<len;i++){
		currentIndex += 1;
		const p = p_stringTrim(pieces[i]);
		if(currentIndex===1){
			currentItem = {};
			currentItem.group = group;
			currentItem.groupAlias = groupAlias;
			currentItem.content = p;
		}
		else if(currentIndex < 7){ // index untuk opsi
			if(currentIndex === 2){
				currentItem.option = [];
			}
			currentItem.option.push(p);
		}
		else{ // scores
			currentItem.scores = [];
			for(let sIndex = 0;sIndex < 5;sIndex++){
				if(p.toLowerCase() === alpabetIndex[sIndex]){
					currentItem.scores.push(5);
				}
				else{
					currentItem.scores.push(0);
				}
			}
			returned.push(currentItem);
			currentIndex = 0;
		}
	}


	return returned;
})();
