namespace RoarUI.Events;

/// <summary>
/// A snapshot of a lightbox item's media. Type is either "image" or "video".
/// </summary>
public record LightboxItemInfo(string Id, string Src, string Alt, string Caption, string Type, string Thumbnail, string SrcSet, string Sizes, int? Width, int? Height);
