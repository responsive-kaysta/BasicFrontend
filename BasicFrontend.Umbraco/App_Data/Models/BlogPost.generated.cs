//------------------------------------------------------------------------------
// <auto-generated>
//   This code was generated by a tool.
//
//    Umbraco.ModelsBuilder v3.0.10.102
//
//   Changes to this file will be lost if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Web;
using Umbraco.Core.Models;
using Umbraco.Core.Models.PublishedContent;
using Umbraco.Web;
using Umbraco.ModelsBuilder;
using Umbraco.ModelsBuilder.Umbraco;

namespace Umbraco.Web.PublishedContentModels
{
	/// <summary>Blog Post</summary>
	[PublishedContentModel("blogPost")]
	public partial class BlogPost : PublishedContentModel, IContentGrid, IPageDefaults
	{
#pragma warning disable 0109 // new is redundant
		public new const string ModelTypeAlias = "blogPost";
		public new const PublishedItemType ModelItemType = PublishedItemType.Content;
#pragma warning restore 0109

		public BlogPost(IPublishedContent content)
			: base(content)
		{ }

#pragma warning disable 0109 // new is redundant
		public new static PublishedContentType GetModelContentType()
		{
			return PublishedContentType.Get(ModelItemType, ModelTypeAlias);
		}
#pragma warning restore 0109

		public static PublishedPropertyType GetModelPropertyType<TValue>(Expression<Func<BlogPost, TValue>> selector)
		{
			return PublishedContentModelUtility.GetModelPropertyType(GetModelContentType(), selector);
		}

		///<summary>
		/// Grid Layout: Fluid Grid brought by bootstrap
		///</summary>
		[ImplementPropertyType("gridLayout")]
		public Newtonsoft.Json.Linq.JToken GridLayout
		{
			get { return Umbraco.Web.PublishedContentModels.ContentGrid.GetGridLayout(this); }
		}

		///<summary>
		/// Header Type: alt (combination with Page Type landing), remove (combination with regular)
		///</summary>
		[ImplementPropertyType("headerType")]
		public object HeaderType
		{
			get { return Umbraco.Web.PublishedContentModels.PageDefaults.GetHeaderType(this); }
		}

		///<summary>
		/// Hide in Menu: not in use at the moment
		///</summary>
		[ImplementPropertyType("hideInMenu")]
		public bool HideInMenu
		{
			get { return Umbraco.Web.PublishedContentModels.PageDefaults.GetHideInMenu(this); }
		}

		///<summary>
		/// Introduction: Page introduction, Meta relevant
		///</summary>
		[ImplementPropertyType("introduction")]
		public string Introduction
		{
			get { return Umbraco.Web.PublishedContentModels.PageDefaults.GetIntroduction(this); }
		}

		///<summary>
		/// Page Style: Colorscheme
		///</summary>
		[ImplementPropertyType("pageStyle")]
		public object PageStyle
		{
			get { return Umbraco.Web.PublishedContentModels.PageDefaults.GetPageStyle(this); }
		}

		///<summary>
		/// Page Type: landing (alt Header Type) and regular (remove Header Type)
		///</summary>
		[ImplementPropertyType("pageType")]
		public object PageType
		{
			get { return Umbraco.Web.PublishedContentModels.PageDefaults.GetPageType(this); }
		}

		///<summary>
		/// Teaser Image: Could be usefull
		///</summary>
		[ImplementPropertyType("teaserImage")]
		public IPublishedContent TeaserImage
		{
			get { return Umbraco.Web.PublishedContentModels.PageDefaults.GetTeaserImage(this); }
		}

		///<summary>
		/// Title: Pagetitle
		///</summary>
		[ImplementPropertyType("title")]
		public string Title
		{
			get { return Umbraco.Web.PublishedContentModels.PageDefaults.GetTitle(this); }
		}
	}
}
